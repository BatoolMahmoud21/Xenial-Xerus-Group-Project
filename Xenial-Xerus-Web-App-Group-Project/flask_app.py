#Import all required modules/libraries

from flask import Flask, request, jsonify
import sqlite3
import re

#initialises the app
app = Flask(__name__)

#creates endpoint for the search, gets the search query from the request query

@app.route('/')
def welcome():
    print("Welcome)

@app.route('/api/search', methods=['GET'])
def search():
    search_query = request.args.get('query', '').strip()  
    
    print(f"Received search query: {search_query}")

    if not search_query:
        return jsonify({"error": "No search criteria provided"}), 400

    try:
        #connects the to the sqlite database 
        conn = sqlite3.connect('SNP_DATABASE.db')
        cursor = conn.cursor()

        # Determine what the search query is, i.e. rs id, chromosome etc
        is_rs_id = re.match(r'^rs\d+$', search_query) is not None
        is_numeric = search_query.replace(',', '').isdigit()

        clean_search = search_query.replace(',', '') if is_numeric else search_query
        
        # General debugging to ensure the database is connected and everyone looks normal 
        cursor.execute("PRAGMA table_info(GENES)")
        genes_columns = cursor.fetchall()
        print("GENES table columns:", genes_columns)
               
        cursor.execute("SELECT COUNT(*) FROM GENES")
        genes_count = cursor.fetchone()[0]
        print(f"Found {genes_count} records in GENES table")
        
        # Building the search query
        where_clause = ""
        params = []
        
        if is_rs_id:
            # Looking for the EXACT match for rs id not similar or LIKE
            where_clause = "SNPS.rs_id = ?"
            params = [search_query]
        elif is_numeric:
            # For numeric values CAST ensures type matching - converts to string
            where_clause = """
                GENES.chromosome = ? OR 
                CAST(GENES.start_pos AS TEXT) = ? OR 
                CAST(GENES.end_pos AS TEXT) = ? OR
                SNPS.rs_id = ?
            """
            params = [search_query, search_query, search_query, f"rs%{search_query}%"]
            
            # Added a debug query to check if there are actually any matching positions
            debug_query = "SELECT COUNT(*) FROM GENES WHERE CAST(start_pos AS TEXT) = ? OR CAST(end_pos AS TEXT) = ?"
            cursor.execute(debug_query, [search_query, search_query])
            position_matches = cursor.fetchone()[0]
            print(f"Found {position_matches} position matches for '{search_query}'")
        else:
        
            where_clause = "GENES.gene_symbol LIKE ?"
            params = [f"%{search_query}%"]

        #Execute the query and then return results in json format
        query = f""" 
            SELECT 
                SNPS.rs_id,
                GENES.gene_symbol,
                GENES.gene_name,
                GENES.chromosome,
                GENES.start_pos,
                GENES.end_pos,
                POPULATION_SNP.p_value,
                POPULATION.population_name,
                POPULATION_SNP.tajimas_d_value,
                POPULATION_SNP.EHH
            FROM SNPS 
            JOIN GENES ON SNPS.gene_id = GENES.gene_id
            JOIN POPULATION_SNP ON SNPS.rs_id = POPULATION_SNP.rs_id
            JOIN POPULATION ON POPULATION_SNP.population_id = POPULATION.population_id
            WHERE {where_clause}
        """

        print("Executing query:", query)
        print("With parameters:", params)
        
        cursor.execute(query, params)
        rows = cursor.fetchall()
        
        print(f"Query returned {len(rows)} results")

        conn.close()

        if not rows:
            return jsonify({"error": "No SNPs found matching the criteria"}), 404

        snps = []
        for row in rows:
            snps.append({
                'rs_id': row[0],
                'Gene': row[1],
                'Gene Name': row[2],
                'Chromosome': row[3],
                'Start Position': row[4],
                'End Position': row[5],
                'p Value': row[6],
                'Population': row[7],
                'Tajimas D value': row[8],
                'EHH': row[9]
            })

        return jsonify(snps)

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500



#defines the route endpoint for descriptive information on the populations
@app.route('/api/gene/population-info/<population_name>/<rs_id>', methods=['GET'])
def get_population_info(population_name, rs_id):

    try:
        #connecting to database
        conn = sqlite3.connect('SNP_DATABASE.db')
        cursor = conn.cursor()

        print(f"Connected")

        #Executing the query and return the results
        query_population = """
            SELECT
                POPULATION_SNP.rs_id,
                POPULATION.region,
                POPULATION_SNP.specific_region,
                POPULATION_SNP.num_participants,
                POPULATION_SNP.gender
            FROM POPULATION_SNP
            JOIN POPULATION ON POPULATION_SNP.population_id = POPULATION.population_id
            WHERE POPULATION.population_name = ? AND POPULATION_SNP.rs_id = ?
        """
        cursor.execute(query_population, (population_name,rs_id))
        rows = cursor.fetchall()
        conn.close()

        if not rows:
            return jsonify({"error": "No data was found"}), 404

        population_info = [] 
        for row in rows:
            population_info.append({
                'rs_id': row[0],
                'Region': row[1],
                'Specific Region': row[2],
                'Participants': row[3],
                'Gender': row[4]
                
            })
        print(population_info)
        return jsonify(population_info)
    
    except Exception as e:
        print(f"Error in get_population_info: {str(e)}")
        return jsonify({"error": str(e)}), 500

#define endpoint route for gene info based on the gene symbol clicked
@app.route('/api/gene/gene-info/<gene_symbol>', methods=['GET'])
def get_gene_info(gene_symbol):
    try:
        #connects to database
        conn = sqlite3.connect('SNP_DATABASE.db')
        cursor = conn.cursor()

        # First get the gene name since it will be the same for all entries
        gene_name_query = """
            SELECT DISTINCT gene_name
            FROM GENES
            WHERE gene_symbol = ?
        """
        cursor.execute(gene_name_query, (gene_symbol,))
        gene_name = cursor.fetchone()[0]

        # Then get the unique ontology terms and descriptions
        query = """
            SELECT DISTINCT
                ONTOLOGY_TERMS.term_name,
                ONTOLOGY_TERMS.description
            FROM GENES
            JOIN GENE_ONTOLOGY ON GENES.gene_id = GENE_ONTOLOGY.gene_id
            JOIN ONTOLOGY_TERMS ON GENE_ONTOLOGY.ontology_id = ONTOLOGY_TERMS.ontology_id
            WHERE GENES.gene_symbol = ?
        """

        cursor.execute(query, (gene_symbol,))
        rows = cursor.fetchall()
        conn.close()

        if not rows:
            return jsonify({"error": "No data was found"}), 404

        # Return structured data with one gene name and multiple ontology terms
        response_data = {
            "gene_name": gene_name,
            "ontology_terms": [
                {
                    "term_name": row[0],
                    "description": row[1]
                }
                for row in rows
            ]
        }
            
        return jsonify(response_data)

    except Exception as e:
        print(f"Error in get_gene_info: {str(e)}")
        return jsonify({"error": str(e)}), 500




#Starts the server 
if __name__ == '__main__':
    app.run(debug=True)

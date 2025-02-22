import sqlite3
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def welcome():
    return "Welcome"

@app.route('/api/search', methods=['GET'])
def np():
    search_query = request.args.get('query', '')  # RS ID
    gene_symbol = request.args.get('gene', '')  # Gene Name
    start_pos = request.args.get('start_pos', '')  # Start Position
    end_pos = request.args.get('end_pos', '')  # End Position
    chromosome = request.args.get('chromosome', '')  # Chromosome
    
    print(f"Searching for SNPs with query: {search_query}, gene symbol: {gene_symbol}, "
          f"start position: {start_pos}, end position: {end_pos}, and chromosome: {chromosome}")
    
    if not search_query and not gene_symbol and not start_pos and not end_pos and not chromosome:
        return jsonify({"error": "No search criteria provided"}), 400

    try:
        conn = sqlite3.connect('SNP_DATABASE.db')
        cursor = conn.cursor()

        print(f"Executing query to search for SNPs.")
        
        query = """
            SELECT 
                SNPS.rs_id,
                GENES.gene_symbol,
                GENES.gene_name,
                GENES.chromosome,
                GENES.start_pos,
                GENES.end_pos,
                POPULATION_SNP.p_value 
            FROM SNPS 
            JOIN GENES ON SNPS.gene_id = GENES.gene_id
            JOIN POPULATION_SNP ON SNPS.rs_id = POPULATION_SNP.rs_id
            WHERE 1=1
        """  # Start with a base query

        params = []

        if search_query:
            query += " AND SNPS.rs_id = ?"
            params.append(search_query)

        if gene_symbol:
            query += " AND GENES.gene_symbol = ?"
            params.append(gene_symbol)

        if chromosome:
            query += " AND GENES.chromosome = ?"
            params.append(chromosome)

        if start_pos:
            query += " AND GENES.start_pos = ?"
            params.append(start_pos)

        if end_pos:
            query += " AND GENES.end_pos = ?"
            params.append(end_pos)

        cursor.execute(query, params)
        rows = cursor.fetchall()

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
                'p Value': row[6]
            })

        print(snps)
        return jsonify(snps)

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

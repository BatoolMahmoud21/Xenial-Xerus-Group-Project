#Import all required modules/libraries

import sqlite3
from flask import Flask, request, jsonify

#initialises the app
app = Flask(__name__)

#prints welcome in the root URL
@app.route('/')
def welcome():
    return "Welcome"

#sets up the search 
@app.route('/api/search', methods=['GET'])
def np():
    search_query = request.args.get('query', '')  # rs ID
    gene_symbol = request.args.get('gene', '')  # Gene Name
    start_pos = request.args.get('start_pos', '')  # Start Position
    end_pos = request.args.get('end_pos', '')  # End Position
    chromosome = request.args.get('chromosome', '')  # Chromosome
    
    print(f"Searching for SNPs with query: {search_query}, gene symbol: {gene_symbol}, "
          f"start position: {start_pos}, end position: {end_pos}, and chromosome: {chromosome}") #prints this in the terminal. This was used to check if the request was received by Flask
    
    if not search_query and not gene_symbol and not start_pos and not end_pos and not chromosome:
        return jsonify({"error": "No search criteria provided"}), 400 #Error prints if the fields are not given at all it will print this on the actual website, hence return jsonify

    try:
        conn = sqlite3.connect('SNP_DATABASE.db') # this is used to connect Flask to our SNP Database 
        cursor = conn.cursor() # cursor is able to interact with the actual SQL database - executing and fetching data

        print(f"Executing query to search for SNPs.") # prints this in the terminal to let us know that flask correctly connect to our database
        

        #This is our query - [Table_Name].[Column_Name] - we want data from our columns in the data base that contain rs id, gene symbol, chromosome, p value and chromosome start and end position
        #Because this data is across 3 tables we must specify which tables and how they connect with eachother
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
        """  

        params = [] #list that will hold the values that are used as parameters for the search query, e.g. rs id, chromosome etc 

        # using = instead of LIKE ensures that the query exactly matches and not just get values that contain those queries
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

        cursor.execute(query, params) #executes the query
        rows = cursor.fetchall()

        conn.close() #closes the connection

        #if there are no results, prints this on the website
        if not rows:
            return jsonify({"error": "No SNPs found matching the criteria"}), 404 

        #stores the results in an array
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

        print(snps) #prints the snps on command line to double check if the table and results were gathered and formatted correctly
        return jsonify(snps) #returns that to the website

    #error handling - if there are any other errors that were not taken into account
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500


#Starts the server 
if __name__ == '__main__':
    app.run(debug=True)

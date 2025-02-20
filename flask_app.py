
import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def welcome():
    return "Welcome"

@app.route('/api/search', methods=['GET'])
def np():
    search_query = request.args.get('query', '')
    print(f"Searching for SNPs with query: {search_query}")
    
    if not search_query:
        return jsonify({"error": "No query provided"}), 400

    try:
        conn = sqlite3.connect('SNP_DATABASE.db')
        cursor = conn.cursor()

        print(f"Executing query to search for SNP: {search_query}")
        query = """
            SELECT
                SNPS.rs_id,
                GENES.gene_symbol
                GENES.start_pos
                GENES.end_pos 
            FROM SNPS 
            JOIN GENES ON SNPS.gene_id = GENES.id
            WHERE SNPS.rs_id LIKE ?
            """ 
        cursor.execute(query,('%' + search_query + '%',))
        rows = cursor.fetchall()
        
        conn.close()
        
        if not rows:
            return jsonify({"NO SNPS FOUND"})

        snps = []
        for row in rows:
            snps.append({
                'rs_id': row[0],
                'Gene': row[1],
                'Start Position':row[2],
                'End Position': row[3]

            })

        return jsonify(snps)

    except Exception as e:

        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

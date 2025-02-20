
import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/search', methods=['GET'])
def search_snp():

    search_query = request.args.get('query', '')

    conn = sqlite3.connect('SNP_DATABASE.db')
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM SNPS WHERE ID LIKE ? ",('%' + search_query + '%',) )
    rows = cursor.fetchall()

    conn.close()

    snps = []
    for row in rows:
        snps.append({
            'id': row[0],  # Adjust this based on your table structure
            'gene': row[1],      # Adjust this based on your table structure  # Adjust this based on your table structure
            'p_value': row[4],   # Adjust this based on your table structure
        })

    
    return jsonify(snps)
    # Return the HTML response

if __name__ == '__main__':
    app.run(debug=True)

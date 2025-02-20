import sqlite3
from flask import Flask, request, jsonify

app = Flask(__name__)

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
        cursor.execute("SELECT * FROM SNPS WHERE rs_id LIKE ?", ('%' + search_query + '%',))
        rows = cursor.fetchall()
        print(f"Rows found: {rows}")
        conn.close()
    except Exception as e:
        print(f"Error occurred: {str(e)}")
        return jsonify({"error": str(e)}), 500

    snps = []
    for row in rows:
        snps.append({
            'id': row[0],
            'gene': row[1]
        })

    return jsonify(snps)


if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, jsonify, request # type: ignore
from flask_sqlalchemy import SQLAlchemy # type: ignore

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///SNP_DATABASE.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Item(db.Model):
    id = db.Column(db.String(50), primary_key=True)
    name = db.Column(db.String(100), nullable=False)

@app.route('/api/search', methods=['GET'])
def search():
    query = request.args.get('query')  # Get search query parameter
    if query:
        results = Item.query.filter(Item.name.ilike(f"%{query}%")).all()  # Search items whose name contains query
        return jsonify([item.name for item in results])  # Return the search results as a JSON array
    return jsonify([])  # Return an empty list if no query

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS  # Add this

app = Flask(__name__)
CORS(app)  # Add this

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///SNP_DATABASE.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Add this to check registered routes
print("Registered routes:")
print(app.url_map)

class SNPData(db.Model):
    __tablename__ = 'SNPS'
    id = db.Column(db.String(50), primary_key=True)
    name = db.Column(db.String(100), nullable=False)

@app.route('/api/search', methods=['GET'])
def search():
    print("Search endpoint hit!")  # Add this logging
    query = request.args.get('query')
    if query:
        print(f"Searching for: {query}")  # Add this logging
        results = Item.query.filter(Item.name.ilike(f"%{query}%")).all()
        return jsonify([item.name for item in results])
    return jsonify([])

if __name__ == '__main__':
    app.run(debug=True)
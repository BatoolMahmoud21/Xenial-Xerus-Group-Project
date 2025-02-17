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

#Defining the tables 

# 1.GENES TABLE

class Gene(db.Model):
    gene_id = db.Column(db.Integer, primary_key=True)
    gene_symbol = db.Column(db.String(100), unique=True, nullable=False)
    chromosome = db.Column(db.String(100), nullable=False)
    start_pos = db.Column(db.Integer, nullable=False)
    end_pos = db.Column(db.Integer, nullable=False)
    gene_name = db.Column(db.String(100))

    def __repr__(self):
        return f'<Gene {self.gene_symbol}>'
# 2.SNPS TABLE

class SNP(db.Model):
    rs_id = db.Column(db.String(100), primary_key=True)
    chromosome = db.Column(db.Integer)
    pos = db.Column(db.Integer)
    reference_allele = db.Column(db.String(1))
    alternate_allele = db.Column(db.String(1))
    gene_id = db.Column(db.Integer, db.ForeignKey('gene.gene_id'))

    gene = db.relationship('Gene', backref='snps')

    def __repr__(self):
        return f'<SNP {self.rs_id}>'
        
# 3.PHENOTYPE TABLE

class Phenotype(db.Model):
    phenotype_id = db.Column(db.Integer, primary_key=True)
    phenotype_name = db.Column(db.String(100), unique=True, nullable=False)
    description = db.Column(db.Text)

    def __repr__(self):
        return f'<Phenotype {self.phenotype_name}>'
        
# 4.POPULATION TABLE

class Population(db.Model):
    population_id = db.Column(db.Integer, primary_key=True)
    population_name = db.Column(db.String(100), nullable=False)
    region = db.Column(db.String(100))

    def __repr__(self):
        return f'<Population {self.population_name}>'

        
# 5.SUMMARY_STATS

class SummaryStats(db.Model):
    stats_id = db.Column(db.Integer, primary_key=True)
    rs_id = db.Column(db.String(100), db.ForeignKey('snp.rs_id'), nullable=False)
    population_id = db.Column(db.Integer, db.ForeignKey('population.population_id'), nullable=False)
    tajimas_d = db.Column(db.Float, nullable=False)
    ihs = db.Column(db.Float, nullable=False)

    population = db.relationship('Population', backref='summary_stats')
    snp = db.relationship('SNP', backref='summary_stats')

    def __repr__(self):
        return f'<SummaryStats {self.stats_id}>'
        
# 6.ONTOLOGY TERMS

class OntologyTerm(db.Model):
    ontology_id = db.Column(db.Integer, primary_key=True)
    term_name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)

    def __repr__(self):
        return f'<OntologyTerm {self.term_name}>'
        
# 7.SNP PHENOTYPE

class SNPPhenotype(db.Model):
    rs_id = db.Column(db.String(100), db.ForeignKey('snp.rs_id'), primary_key=True)
    phenotype_id = db.Column(db.Integer, db.ForeignKey('phenotype.phenotype_id'), primary_key=True)

    snp = db.relationship('SNP', backref='snp_phenotypes')
    phenotype = db.relationship('Phenotype', backref='snp_phenotypes')

    def __repr__(self):
        return f'<SNPPhenotype {self.rs_id} - {self.phenotype_id}>'
        
# 8.POPULATION SNP

class PopulationSNP(db.Model):
    population_id = db.Column(db.Integer, db.ForeignKey('population.population_id'), primary_key=True)
    rs_id = db.Column(db.String(100), db.ForeignKey('snp.rs_id'), primary_key=True)
    p_value = db.Column(db.Float)

    population = db.relationship('Population', backref='population_snps')
    snp = db.relationship('SNP', backref='population_snps')

    def __repr__(self):
        return f'<PopulationSNP {self.population_id} - {self.rs_id}>'

# 9.GENE ONTOLOGY 

class GeneOntology(db.Model):
    __tablename__ = 'gene_ontology'
    
    # Define the foreign keys to connect Gene and OntologyTerm
    gene_id = db.Column(db.Integer, db.ForeignKey('gene.gene_id'), primary_key=True)
    ontology_id = db.Column(db.Integer, db.ForeignKey('ontology_term.ontology_id'), primary_key=True)
    
    # Define the relationships to the other tables
    gene = db.relationship('Gene', backref='gene_ontologies')
    ontology_term = db.relationship('OntologyTerm', backref='gene_ontologies')
    
    def __repr__(self):
        return f'<GeneOntology {self.gene_id} - {self.ontology_id}>'

if __name__ == '__main__':
    app.run(debug=True)

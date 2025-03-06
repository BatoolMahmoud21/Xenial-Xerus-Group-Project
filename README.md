HEAD
# Xenial-Xerus 
This project aimed to build a Type 2 Diabetes SNP Retrieval Web App. This web application can retrieve information on single nucleotide polymorphisms (SNPs) associated with T2D and integrate them with population genomic and functional data. The web application is also capable of producing informative plots and analyses in this regard.



# Project Overview 
This project involves the development of a web-based application designed to retrieve, analyze and visualise SNP (Single Nucleotide Polymorphism) data associated with Type 2 Diabetes within the South and East Asian Population. These populations were investigated as they have historically been poorly represented in genetic studies, particularly those relating to diabetes compared to European ancestry groups, limiting the understanding of population-specific genetic risk factors for T2D (Hodgson et al., 2024). By addressing this limitation, our application provides researchers an exclusive platform to explore genetic variations influencing T2D susceptibility within Asian groups.


# Software Architecture
### Frontend
* HTML/CSS: Uses HTML templates and CSS for a consistent UI, and a cohesive color scheme.
* JavaScript: Enables interactive elements and dynamic content loading, handling form inputs.
### Backend
* Flask Application: Handles routing, session management, and communication between the frontend and the database.
* SQLite Database: Stores genetic data, population information, and SNP annotations for efficient querying.
* Summary Statistics and Visualization: Utilized Apocrita: bcftools and vcftools, NumPy, Pandas for data manipulation and Matplotlib and Rstudio for generating plots and visualization.

# How to install and use (Unix/Command Line)
1. Clone or download the project repository to your local machine.
2. Install Node.js (node and npm), Python and Flask
3. Navigate to the project directory
4. Run npm install
5. Run the flask app file using Python inside the project directory where the python file is located
6. Navigate to the react-app directory and run npm install
* Versions of Node.js, npm, Python and Flask are located in the Dependencies file
  
### `Python flask_app.py`

Runs Flask in the development mode.\
Open http://127.0.0.1:5000 to view it in your browser

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


# Contributors 
* Batool Mahmoud
* Sneha Dharmeche
* Maryam Koddus
* Jessica Ibada-Nwafor
* Precious Aghara



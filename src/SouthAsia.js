import React, { useState } from 'react';
import './SouthAsia.css';

// Tajima D Summary Statistic Images (Sorted by Chromosome Number)
import BangChr6 from './images/Bangladesh-chr6.png';
import BangChr8 from './images/Bangladesh-chr8.png';
import BangChr10 from './images/Bangladesh-chr10.png';
import BangChr10_2 from './images/Bangladesh-chr10.2.png';
import BangChr11 from './images/Bangladesh-chr11.png';

// Updated Pakistan Tajima D Chromosome Images (Replaced with New Text File Data)
import PakChr3 from './images/Pakistan-chr3.png';  // Corresponds to chr3PJL.2-tajd.txt
import PakChr10 from './images/Pakistan-chr10.png'; // Corresponds to chr10PJL.2-tajd.txt
import PakChr13 from './images/Pakistan-chr13.png'; // Corresponds to chr13PJL.2-tajd.txt
import PakChr20 from './images/Pakistan-chr20.png'; // Corresponds to chr20PJL.2-tajd.txt

// EHH Summary Statistics Images (Sorted by Chromosome Number)
import BangSNPrs7756992 from './images/Bangladesh-SNPrs7756992-chr6.png';
import BangSNPrs13266634 from './images/Bangladesh-SNPrs13266634-chr8.png';
import BangSNPrs1111875 from './images/Bangladesh-SNPrs1111875-chr10.png';
import BangSNPrs7903146 from './images/Bangladesh-SNPrs7903146-chr10.png';
import BangSNPrs12255372 from './images/Bangladesh-SNPrs12255372-chr10.png';
import BangSNPrs5219 from './images/Bangladesh-SNPrs5219-chr11.png';

import PakSNPrs2241766_3 from './images/Pakistan-SNPrs2241766-chr3.png';
import PakSNPrs7903146 from './images/Pakistan-SNPrs7903146-chr10.png';
import PakSNPrs1805097 from './images/Pakistan-SNPrs1805097-chr13.png';
import PakSNPrs2241766_20 from './images/Pakistan-SNPrs2241766-chr20.png';

function SouthAsia() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const downloadImage = (imageSrc, imageName) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageName;
    link.click();
  };

  // Function to download a specific .txt file
  const downloadFile = (fileName) => {
    const link = document.createElement('a');
    link.href = `/files/${fileName}`; // URL to the .txt file
    link.setAttribute('download', fileName); // Name for the downloaded file
    document.body.appendChild(link); // Add the link element to the DOM
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link element after clicking
  };

  return (
    <div className="SouthAsia">
      <header className="page-header">
        <button className="home-button" onClick={() => alert('Home clicked')}>
          Home
        </button>
        <h1 className="header">Summary Statistics</h1>
      </header>

      <div className="stats-list">
        {/* Bangladesh Section */}
        <section>
          <h2>Bangladesh</h2>
          
          {/* Tajima D Summary Statistic */}
          <div className="country-stats">
            <h3>Tajima D Summary Statistic</h3>
            
            <div className="image-container">
              <img src={BangChr6} alt="Bangladesh Chromosome 6" className="summary-image" onClick={() => openModal(BangChr6)} /> 
              <div>
                <button className="download-button" onClick={() => downloadImage(BangChr6, "Bangladesh-Chr6.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr6BEB.2.txt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={BangChr10} alt="Bangladesh Chromosome 10" className="summary-image" onClick={() => openModal(BangChr10)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(BangChr10, "Bangladesh-Chr10.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr10BEB.2.txt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={BangChr8} alt="Bangladesh Chromosome 8" className="summary-image" onClick={() => openModal(BangChr8)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(BangChr8, "Bangladesh-Chr8.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr8BEB.2.txt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={BangChr10_2} alt="Bangladesh Chromosome 10.2" className="summary-image" onClick={() => openModal(BangChr10_2)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(BangChr10_2, "Bangladesh-Chr10_2.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr10BEB.2.1.txt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={BangChr11} alt="Bangladesh Chromosome 11" className="summary-image" onClick={() => openModal(BangChr11)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(BangChr11, "Bangladesh-Chr11.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr11BEB.2.txt')}>Download TextFile</button>
              </div>
            </div>
          </div>
        </section> {/* Closing Bangladesh Section */}

        {/* Bangladesh EHH Summary Statistics */}
        <div className="country-stats">
          <h3>EHH Summary Statistics</h3>
          {[BangSNPrs7756992, BangSNPrs13266634, BangSNPrs1111875, BangSNPrs7903146, BangSNPrs12255372, BangSNPrs5219].map((image, index) => (
            <div className="image-container" key={index}>
              <img src={image} alt={`Bangladesh SNP Chromosome ${index + 1}`} className="summary-image" onClick={() => openModal(image)} />
              <button className="download-button" onClick={() => downloadImage(image, `Bangladesh-SNP-Chr${index + 1}.png`)}>Download Image</button>
            </div>
          ))}
        </div> {/* Closing Bangladesh EHH Summary Statistics */}

        {/* Pakistan Section */}
        <section>
          <h2>Pakistan</h2>
          
          {/* Tajima D Summary Statistic */}
          <div className="country-stats">
            <h3>Tajima D Summary Statistic</h3>
            
            {/* For each Pakistan image, include a download button for the corresponding .txt file */}
            <div className="image-container">
              <img src={PakChr3} alt="Pakistan Chromosome 3" className="summary-image" onClick={() => openModal(PakChr3)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(PakChr3, "Pakistan-Chr3.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr3PJL.2-tajd.txt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={PakChr10} alt="Pakistan Chromosome 10" className="summary-image" onClick={() => openModal(PakChr10)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(PakChr10, "Pakistan-Chr10.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr10PJL.2-tajd.txt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={PakChr13} alt="Pakistan Chromosome 13" className="summary-image" onClick={() => openModal(PakChr13)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(PakChr13, "Pakistan-Chr13.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr13PJL.2-tajd.txt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={PakChr20} alt="Pakistan Chromosome 20" className="summary-image" onClick={() => openModal(PakChr20)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(PakChr20, "Pakistan-Chr20.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr20PJL.2-tajd.txt')}>Download TextFile</button>
              </div>
            </div>
          </div> {/* Closing Pakistan Section */}

          {/* EHH Summary Statistics */}
          <div className="country-stats">
            <h3>EHH Summary Statistics</h3>
            {[PakSNPrs2241766_3, PakSNPrs7903146, PakSNPrs1805097, PakSNPrs2241766_20].map((image, index) => (
              <div className="image-container" key={index}>
                <img src={image} alt={`Pakistan SNP Chromosome ${index + 1}`} className="summary-image" onClick={() => openModal(image)} />
                <button className="download-button" onClick={() => downloadImage(image, `Pakistan-SNP-Chr${index + 1}.png`)}>Download Image</button>
              </div>
            ))}
          </div> {/* Closing EHH Summary Statistics */}
        </section> {/* Closing Pakistan Section */}
      </div>

      {/* Modal for displaying enlarged image */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Enlarged Summary Statistic" className="modal-image" />
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      <footer>
        <p>Summary Statistics for South Asia</p>
        <p className="footer-group-name">© 2025 Xenial Xerus. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SouthAsia;

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
            {[BangChr6, BangChr8, BangChr10, BangChr10_2, BangChr11].map((image, index) => (
              <div className="image-container" key={index}>
                <img src={image} alt={`Bangladesh Chromosome ${index + 1}`} className="summary-image" onClick={() => openModal(image)} />
                <button className="download-button" onClick={() => downloadImage(image, `Bangladesh-Chr${index + 1}.png`)}>Download Image</button>
              </div>
            ))}
          </div>

          {/* EHH Summary Statistics */}
          <div className="country-stats">
            <h3>EHH Summary Statistics</h3>
            {[BangSNPrs7756992, BangSNPrs13266634, BangSNPrs1111875, BangSNPrs7903146, BangSNPrs12255372, BangSNPrs5219].map((image, index) => (
              <div className="image-container" key={index}>
                <img src={image} alt={`Bangladesh SNP Chromosome ${index + 1}`} className="summary-image" onClick={() => openModal(image)} />
                <button className="download-button" onClick={() => downloadImage(image, `Bangladesh-SNP-Chr${index + 1}.png`)}>Download Image</button>
              </div>
            ))}
          </div>
        </section>

        {/* Pakistan Section */}
        <section>
          <h2>Pakistan</h2>
          
          {/* Tajima D Summary Statistic */}
          <div className="country-stats">
            <h3>Tajima D Summary Statistic</h3>
            {[PakChr3, PakChr10, PakChr13, PakChr20].map((image, index) => (
              <div className="image-container" key={index}>
                <img src={image} alt={`Pakistan Chromosome ${index + 1}`} className="summary-image" onClick={() => openModal(image)} />
                <button className="download-button" onClick={() => downloadImage(image, `Pakistan-Chr${index + 1}.png`)}>Download Image</button>
              </div>
            ))}
          </div>

          {/* EHH Summary Statistics */}
          <div className="country-stats">
            <h3>EHH Summary Statistics</h3>
            {[PakSNPrs2241766_3, PakSNPrs7903146, PakSNPrs1805097, PakSNPrs2241766_20].map((image, index) => (
              <div className="image-container" key={index}>
                <img src={image} alt={`Pakistan SNP Chromosome ${index + 1}`} className="summary-image" onClick={() => openModal(image)} />
                <button className="download-button" onClick={() => downloadImage(image, `Pakistan-SNP-Chr${index + 1}.png`)}>Download Image</button>
              </div>
            ))}
          </div>
          
          {/* Download buttons for .txt files */}
          <div className="download-text-files">
            <button onClick={() => downloadFile('chr3PJL.2-tajd.txt')}>Download chr3PJL.2-tajd.txt</button>
            <button onClick={() => downloadFile('chr10PJL.2-tajd.txt')}>Download chr10PJL.2-tajd.txt</button>
            <button onClick={() => downloadFile('chr13PJL.2-tajd.txt')}>Download chr13PJL.2-tajd.txt</button>
            <button onClick={() => downloadFile('chr20PJL.2-tajd.txt')}>Download chr20PJL.2-tajd.txt</button>
          </div>
        </section>
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

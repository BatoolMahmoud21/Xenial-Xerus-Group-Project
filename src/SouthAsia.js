import React, { useState } from 'react';
import './SouthAsia.css';
// Importing images
import BangChr6_2 from './images/TAJD bang-chr-6-2.png';
import BangChr8_2 from './images/TAJD bang-chr-8-2.png';
import BangChr10_2 from './images/TAJD bang-chr10-2.png';
import BangChr11_2 from './images/TAJD bang-chr-11-2.png';
import PakChr3_2 from './images/TAJD pak-chr3-2.png';
import PakChr10_2 from './images/TAJD pak-chr10-2.png';
import PakChr13_2 from './images/TAJD pak-chr-13-2.png';
import PakChr20_2 from './images/TAJD pak-20-2.png';

function SouthAsia() {
  const [modalImage, setModalImage] = useState(null);

  // Function to open modal with image
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  // Function to close modal
  const closeModal = () => {
    setModalImage(null);
  };

  // Function to download image
  const downloadImage = (imageSrc, imageName) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageName; // Set the download name for the image
    link.click();
  };

  return (
    <div className="SouthAsia">
      <header className="page-header">
        <button className="home-button" onClick={() => alert('Home clicked')}>
          Home
        </button>
        <h1 className="header">Tajima's D Summary Statistics</h1>
      </header>

      <div className="stats-list">
        {/* Bangladesh Section */}
        <div className="country-stats">
          <h2>Bangladesh</h2>
          <div className="image-container">
            <img
              src={BangChr6_2}
              alt="Tajima's D for Bangladesh (Chromosome 6 - 2)"
              className="summary-image"
              onClick={() => openModal(BangChr6_2)}
            />
            
            <button
              className="download-button"
              onClick={() => downloadImage(BangChr6_2, 'BangChr6_2.png')}
            >
              Download Image
            </button>
          </div>
          <div className="image-container">
            <img
              src={BangChr8_2}
              alt="Tajima's D for Bangladesh (Chromosome 8 - 2)"
              className="summary-image"
              onClick={() => openModal(BangChr8_2)}
            />
            <button
              className="download-button"
              onClick={() => downloadImage(BangChr8_2, 'BangChr8_2.png')}
            >
              Download Image
            </button>
          </div>
          <div className="image-container">
            <img
              src={BangChr10_2}
              alt="Tajima's D for Bangladesh (Chromosome 10 - 2)"
              className="summary-image"
              onClick={() => openModal(BangChr10_2)}
            />
            <button
              className="download-button"
              onClick={() => downloadImage(BangChr10_2, 'BangChr10_2.png')}
            >
              Download Image
            </button>
          </div>
          <div className="image-container">
            <img
              src={BangChr11_2}
              alt="Tajima's D for Bangladesh (Chromosome 11 - 2)"
              className="summary-image"
              onClick={() => openModal(BangChr11_2)}
            />
            <button
              className="download-button"
              onClick={() => downloadImage(BangChr11_2, 'BangChr11_2.png')}
            >
              Download Image
            </button>
          </div>
        </div>

        {/* Pakistan Section */}
        <div className="country-stats">
          <h2>Pakistan</h2>
          <div className="image-container">
            <img
              src={PakChr3_2}
              alt="Tajima's D for Pakistan (Chromosome 3 - 2)"
              className="summary-image"
              onClick={() => openModal(PakChr3_2)}
            />
            <button
              className="download-button"
              onClick={() => downloadImage(PakChr3_2, 'PakChr3_2.png')}
            >
              Download Image
            </button>
          </div>
          <div className="image-container">
            <img
              src={PakChr10_2}
              alt="Tajima's D for Pakistan (Chromosome 10 - 2)"
              className="summary-image"
              onClick={() => openModal(PakChr10_2)}
            />
            <button
              className="download-button"
              onClick={() => downloadImage(PakChr10_2, 'PakChr10_2.png')}
            >
              Download Image
            </button>
          </div>
          <div className="image-container">
            <img
              src={PakChr13_2}
              alt="Tajima's D for Pakistan (Chromosome 13 - 2)"
              className="summary-image"
              onClick={() => openModal(PakChr13_2)}
            />
            <button
              className="download-button"
              onClick={() => downloadImage(PakChr13_2, 'PakChr13_2.png')}
            >
              Download Image
            </button>
          </div>
          <div className="image-container">
            <img
              src={PakChr20_2}
              alt="Tajima's D for Pakistan (Chromosome 20 - 2)"
              className="summary-image"
              onClick={() => openModal(PakChr20_2)}
            />
            <button
              className="download-button"
              onClick={() => downloadImage(PakChr20_2, 'PakChr20_2.png')}
            >
              Download Image
            </button>
          </div>
        </div>
      </div>

      {/* Modal for displaying enlarged image */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Enlarged Tajima's D" className="modal-image" />
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      
      <footer>
  <p>Summary Statistics for South Asia</p>
  <p className="footer-group-name">
    © 2025 Xenial Xerus. All rights reserved.
  </p>
</footer>
    </div>
  );
}

export default SouthAsia;

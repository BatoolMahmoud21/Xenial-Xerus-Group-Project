import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SouthAsia.css';

// Import Tajima D Summary Statistic Images for Bangladesh 
import BangChr6 from './images/tajdbangladeshchr6-rs7756992.png';
import BangChr8 from './images/tajdbangladeshchr8-rs13266634.png';
import BangChr10 from './images/tajdbangladeshchr10-rs790314-rs12255372.png';
import BangChr10_2 from './images/tajdbangladeshchr10-rs1111875.png';
import BangChr11 from './images/tajdbangladeshchr11-rs5219.png';

// Import  Tajima D Summary Statistics Images for Pakistan
import PakChr3 from './images/tajdpakistanchr3-rs18012182.png';
import PakChr10 from './images/tajdpakistanchr10-rs7903146.png';
import PakChr13 from './images/tajdpakistanchr13-rs1805097.png';
import PakChr20 from './images/tajdpakistanchr20-rs745975.png';

// Import EHH Summary Statistics Images for Bangladesh
import BangSNPrs7756992 from './images/ehhbangladeshchr6-rs7756992.png';
import BangSNPrs13266634 from './images/ehhbangladeshchr8-rs13266634.png';
import BangSNPrs1111875 from './images/ehhbangladeshchr10-rs1111875.png';
import BangSNPrs7903146 from './images/ehhbangladeshchr10-rs7903146.png';
import BangSNPrs12255372 from './images/ehhbangladeshchr10-rs12255372.png';
import BangSNPrs5219 from './images/ehhbangladeshchr11-rs5219.png';

// Import EHH Summary Statistics Images for Pakistan
import PakSNPrs1801282 from './images/ehhpakistanchr3-rs1801282.png';
import PakSNPrs7903146 from './images/ehhpakistanchr10-rs7903146.png';
import PakSNPrs1805097 from './images/ehhpakistanchr13-rs1805097.png';
import PakSNPrs745975 from './images/ehhpakistanchr20-rs745975.png';


function SouthAsia() {
  const [modalImage, setModalImage] = useState(null); // State to manage the modal images

  const openModal = (imageSrc) => { // Function to open the modal content with the selected image
    setModalImage(imageSrc);
  };

  const closeModal = () => { // Function to close the modal
    setModalImage(null);
  };

  const downloadImage = (imageSrc, imageName) => { // Function to download the image file
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageName;
    link.click();
  };

 
  const downloadFile = (fileName) => {  // Function to download a specific .txt file from the public directory 
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/files/${fileName}`; // Using PUBLIC_URL to resolve path, public folder
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };  
 
  const navigate = useNavigate(); // Navigation function

  return (
    <div className="SouthAsia">
      <header className="page-header">
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
        <h1 className="header">Summary Statistics</h1>
      </header>

      <div className="stats-list">
        {/* Bangladesh Section */}
        <h2 className="country-heading">Bangladesh</h2>
        <section>
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
              <img src={BangChr8} alt="Bangladesh Chromosome 8" className="summary-image" onClick={() => openModal(BangChr8)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(BangChr8, "Bangladesh-Chr8.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr8BEB.2.txt')}>Download TextFile</button>
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

          <div className="country-stats">
            <h3>EHH Summary Statistics</h3>

            <div className="image-container">
              <img src={BangSNPrs7756992} alt="Bangladesh Chromosome 6 (rs7756992)" className="summary-image" onClick={() => openModal(BangSNPrs7756992)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(BangSNPrs7756992, "Bangladesh-Chr6-rs7756992.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr6ehh_BEB_r.txt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={BangSNPrs13266634} alt="Bangladesh Chromosome 8 (rs13266634)" className="summary-image" onClick={() => openModal(BangSNPrs13266634)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(BangSNPrs13266634, "Bangladesh-Chr8-rs13266634.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr8ehh_BEB_r.txt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={BangSNPrs1111875} alt="Bangladesh Chromosome 10 (rs1111875)" className="summary-image" onClick={() => openModal(BangSNPrs1111875)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(BangSNPrs1111875, "Bangladesh-Chr10-rs1111875.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr10ehh_rs1111875_BEB_r.txt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={BangSNPrs7903146} alt="Bangladesh Chromosome 10 (rs7903146)" className="summary-image" onClick={() => openModal(BangSNPrs7903146)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(BangSNPrs7903146, "Bangladesh-Chr10-rs7903146.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr10ehh_rs7903146_BEB_r.txt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={BangSNPrs12255372} alt="Bangladesh Chromosome 10 (rs12255372)" className="summary-image" onClick={() => openModal(BangSNPrs12255372)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(BangSNPrs12255372, "Bangladesh-Chr10-rs12255372.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr10ehh_rs12255372_BEB_r.txt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={BangSNPrs5219} alt="Bangladesh Chromosome 11 (rs5219)" className="summary-image" onClick={() => openModal(BangSNPrs5219)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(BangSNPrs5219, "Bangladesh-Chr11-rs5219.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr11ehh_BEB_r.txt')}>Download TextFile</button>
              </div>
            </div>
          </div>
        </section>

        {/* Pakistan Section */}
        <h2 className="country-heading">Pakistan</h2>
        <section>
          <div className="country-stats">
            <h3>Tajima D Summary Statistic</h3>

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
          </div>

          <div className="country-stats">
            <h3>EHH Summary Statistics</h3>

            <div className="image-container">
              <img src={PakSNPrs1801282} alt="Pakistan Chromosome 3 (rs1801282)" className="summary-image" onClick={() => openModal(PakSNPrs1801282)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(PakSNPrs1801282, "Pakistan-Chr3-rs1801282.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr3ehh_PJL_r.txt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={PakSNPrs7903146} alt="Pakistan Chromosome 10 (rs7903146)" className="summary-image" onClick={() => openModal(PakSNPrs7903146)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(PakSNPrs7903146, "Pakistan-Chr10-rs7903146.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr10ehh_PJL_r.txt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={PakSNPrs1805097} alt="Pakistan Chromosome 13 (rs1805097)" className="summary-image" onClick={() => openModal(PakSNPrs1805097)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(PakSNPrs1805097, "Pakistan-Chr13-rs1805097.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr13ehh_PJL_rtxt')}>Download TextFile</button>
              </div>
            </div>

            <div className="image-container">
              <img src={PakSNPrs745975} alt="Pakistan Chromosome 20 (rs745975)" className="summary-image" onClick={() => openModal(PakSNPrs745975)} />
              <div>
                <button className="download-button" onClick={() => downloadImage(PakSNPrs745975, "Pakistan-Chr20-rs745975.png")}>Download Image</button>
                <button className="download-button" onClick={() => downloadFile('chr20ehh_PJL_r.txt')}>Download TextFile</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal Content */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Enlarged Image" className="modal-image" />
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

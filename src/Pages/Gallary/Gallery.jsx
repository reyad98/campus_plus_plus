// Gallery.js

import React, { useState } from "react";
import "./Gallery.css"; // Import the CSS file for styling

import img10 from "../images/img10.jpg";
import img11 from "../images/img11.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img7 from "../images/img7.jpg";
import img9 from "../images/img9.jpg";

const Gallery = () => {
  const images = [img11, img2, img3, img4, img5, img7, img9, img10, img11];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Zoomed Image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

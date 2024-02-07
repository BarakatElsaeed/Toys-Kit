import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUpLong
} from "@fortawesome/free-solid-svg-icons";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };

  const toggleBackToTopButton = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleBackToTopButton);
    return () => {
      window.removeEventListener('scroll', toggleBackToTopButton);
    };
  }, []); // Only run this effect once during component mount

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      style={{
        display: showButton ? 'block' : 'none',
        position: 'fixed',
        bottom: '20px',
        right: '15px',
        backgroundColor: '#f6be1f',
        color: '#fff',
        border: 'none',
        borderRadius: '10px',
        padding: '10px 20px',
        cursor: 'pointer',
        
      }}
    >
  <FontAwesomeIcon icon={faUpLong} />
    </button>
  );
};

export default BackToTopButton;

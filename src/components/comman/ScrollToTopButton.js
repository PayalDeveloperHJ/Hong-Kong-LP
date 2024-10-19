import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={buttonStyle}>
          ↑
        </button>
      )}
    </div>
  );
};

const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '7px 15px',
  backgroundColor: '#E97C04',
  color: '#FFF',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  borderRadius: '50px',
  width: '50px',
    height: '50px',
};

export default ScrollToTopButton;
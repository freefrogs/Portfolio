import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="footer">
      <p className="footer_p">Copyright {year} Justyna Biernacka</p>
    </div>
  );
}

export default Footer;
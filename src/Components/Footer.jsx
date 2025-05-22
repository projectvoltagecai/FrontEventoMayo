import React from 'react';
import '../assets/css/Footer.css'; // Asegúrate de tener este archivo CSS
import logo from '/VOLTAGE.png';
import logo3 from '/Biometronica.png'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="logo" />
      
     
      
      {/* Texto sobre el semillero */}
      <p className="development-text">
        VOLTAGE es una APP en desarrollo por el Semillero de Investigación BIOMETRONICA del Centro de Automatización Industrial 
      <br/>Prohibida su difusión y utilización sin previa autorización
      <br/> SENA - Caldas - 2025
      </p>
      <img src={logo3} alt="Logo" className="logo1" />
    </footer>
  );
}

export default Footer;
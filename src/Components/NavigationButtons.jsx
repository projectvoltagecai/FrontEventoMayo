import React from 'react';
import '../assets/css/NavigationButtons.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';


const NavigationButtons = ({ backRoute, nextRoute }) => {

  return (
    <div className="nav-buttons">
      <Link to="/bienvenida" className="btn btn-back">
        BACK
      </Link>
      <button className="btn btn-continue">
        CONTINUE
      </button>
    </div>
  );
};

export default NavigationButtons;
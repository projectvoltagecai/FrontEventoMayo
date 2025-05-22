
import '../assets/css/UnderConstruction.css';

import mainImage from '/construccion.png'; // Imagen central
import voltageIcon from '/VoltageName.png'; // Ícono de voltaje (rayos o símbolo)

const UnderConstruction = () => {
  return (
    <div className="under-construction-container">
      <h1 className="title">App in Progress</h1>
      <p className="subtitle">More vocabulary exercises coming soon...</p>

      <div className="image-row">
        <img src={voltageIcon} alt="Voltage Left" className="voltage" />
        <img src={mainImage} alt="App Under Construction" className="main-image" />
        <img src={voltageIcon} alt="Voltage Right" className="voltage" />
      </div>
    </div>
  );
};

export default UnderConstruction;
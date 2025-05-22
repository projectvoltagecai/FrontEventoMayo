import constructionMascot from '../assets/construction-mascot.png'; // Usa una imagen estilo Duolingo/obra
import './UnderConstruction.css';

const UnderConstruction = () => {
  return (
    <div className='under-construction-container'>
      <img
        src={constructionMascot}
        alt='Mascot under construction'
        className='construction-image'
      />
      <h1 className='construction-title'>Coming Soon</h1>
      <p className='construction-text'>
        This app is under construction.<br />
        More vocabulary challenges coming soon!
      </p>
    </div>
  );
};

export default UnderConstruction;
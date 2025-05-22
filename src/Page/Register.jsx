import "../assets/css/Register.css";
import logo from "/VOLTAGE.png"
import bulbieImage from "/Bulby.png"; 

function Register() {
  return (
    <div className="container">
      <div className="profile-wrapper">
      <div className="profile-left">
        <img src={bulbieImage} alt="Robot" className="robot" />
      </div>
      <div className="profile-right">
        <div className="header">
          <img src={logo} alt="Logo" className="logo" />
          <div>
            <h2>CREATE YOUR PROFILE</h2>
            <p>CREA TU PERFIL</p>
          </div>
        </div>

        <form className="form">
          <div className="input-row">
            <input type="text" placeholder="FIRST NAME" />
            <input type="text" placeholder="LAST NAME" />
          </div>
          <div className="input-row">
            <input type="text" placeholder="PROGRAM" />
            <input type="text" placeholder="CARD ID" />
          </div>
          <div className="input-row">
            <input type="email" placeholder="E-MAIL" />
            <input type="text" placeholder="ID" />
          </div>
          <div className="input-row">
            <input type="password" placeholder="PASSWORD" />
            <input type="password" placeholder="CONFIRM PASSWORD" />
          </div>
          <button type="submit" className="create-button">CREATE AN ACCOUNT</button>
        </form>
      </div>
    </div>
      <div className="footer-buttons">
        <button className="back">BACK</button>
        <button className="continue">CONTINUE</button>
      </div>
    </div>
  );
};

export default Register;
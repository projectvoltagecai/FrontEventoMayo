import { Link } from "react-router-dom";
import "../assets/css/index.css";
import logo from "/VoltageName.png";
import Footer from "../Components/Footer";

function index() {
    return (
        <div className="contenedor-principal">
                <img src={logo} alt="logo-voltage" className="logo"/>
                 <div className="contenedor-texto">
                    <p className="texto-bienvenida">Welcome! 
                        <br/>Your trip to electronics start here</p>
                    <Link to="/login" className="btn-empezar-ahora"><strong>LOGIN</strong></Link>
                    <Link to = "#" className="btn-tengo-cuenta" ><strong>REGISTER</strong></Link>
                </div>
                <Footer/>
        </div>
    );
}

export default index;
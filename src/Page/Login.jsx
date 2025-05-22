import "../assets/css/Login.css";
import logo from "/VOLTAGE.png";
import mascotabulbie from "/Bulby.png";
import FloatingInput from "../Components/FloatingInput";
import NavigationButtons from "../Components/NavigationButtons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";


function Login() {
    const user = {
        email: "voltageapp@sena.edu.co",
        password: "biometronica"
    };

    const [mail, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const validarDatos = (e) => {
        e.preventDefault();
        if (mail === user.email && pass === user.password) {
            navigate("/Lesson1"); 
        } else {
            setError(true);
        }
    };

    return (
        <div className="contenedor-principal-inicio-sesion">
            <div className="contenedor-inicio-sesion">
                <div className="contenedor-mascota">
                    <img src={mascotabulbie} alt="bulbie-mascota" className="mascota-bulbie" />
                </div>
                <div className="contenedor-formulario">
                    <div className="contenedor-logo">
                        <img src={logo} alt="logo-voltage" className="logo-inicio-sesion" />
                        <div className="contenedor-texto-inicio-sesion">
                            <br/>
                            <br/>

                            <h2>LOG IN</h2>
                        </div>
                    </div>
                    <div className="contenedor-formulario-inicio-sesion">
                        <form onSubmit={validarDatos}>
                            <FloatingInput
                                value={mail}
                                name="mail"
                                id="email"
                                type="email"
                                label="EMAIL"
                                f={(e) => setEmail(e.target.value)}
                            />
                            <FloatingInput
                                value={pass}
                                name="pass"
                                id="password"
                                type="password"
                                label="PASSWORD"
                                f={(e) => setPass(e.target.value)}
                            />
                            {error && (
                                <div className="mensaje-error">
                                    
                                    Invalid data... Try again!
                                   
                                </div>
                            )}
                            <div className="contenedor-boton-inicio-sesion">
                                <br/>
                                <button className="boton-inicio-sesion">LOGIN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Login;

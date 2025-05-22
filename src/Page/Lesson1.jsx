import '../assets/css/Lesson1.css'
import logo from '/VoltageName.png'
import bulbieImage from '/Bulby.png'
import user from '/Inge.png'
import { Link } from "react-router-dom"
import Footer from '../Components/Footer'

function Lesson1() {
  return (
    <>
      <div className='app-container'>
        <div className='sidebar'>
          <img src={logo} alt='Voltage Logo' className='logo' />
          <button>LEARN</button>
          <button>PRACTICE</button>
          <button>CHALLENGES</button>
          <button>PROFILE</button>
          <button>MORE</button>
        </div>

        <div className='main-content'>
          <div className='lesson-title'>LESSON 1</div>

          <div className='central-area'>
            <img src={bulbieImage} alt='Bulby Robot Mascot' className='robot-center' />
            <Link to='/Question' className='skill reading'>
              READING
            </Link>
            <Link to='/Question' className='skill speaking'>
              VOCABULARY
            </Link>
            <Link to='/Question' className='skill writing'>
              WRITING
            </Link>
            <Link to='/Question' className='skill listening'>
              LISTENING
            </Link>
          </div>
        </div>

        <div className='right-panel'>
          <div className='score-bar'>
            <span className='power'>⚡145</span>
            <span className='energy'>🔵4500</span>
            <span className='health'>❤️5</span>
          </div>

          <div className='profile-box'>
            <h3>PROFILE</h3>
            <p>Alejandro Melo Calderón</p>
            <p>ID 9999999</p>
            <p>Tecnología en Animación Digital</p>
            <p>Ficha: 2626891</p>
            <img src={user} alt='User Avatar' className='user' />
          </div>

          <div className='challenges-box'>
            <h3>DAILY CHALLENGES</h3>
            <ul>
              <li>⚡ Complete 1 level.</li>
              <li>⚡ Make a reading exercise.</li>
              <li>⚡ Reading a tale.</li>
            </ul>
          </div>

          <button className='level-button'>LEVEL 1</button>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Lesson1
import flame from '/Flame.png'
import atom from '/Atom.png'
import transistor from '/Transistor.png'
import led from '/Led.png'
import logo from '/VOLTAGE.png'
import '../assets/css/Question.css'
import ModalQ from '../Components/ModalQ'
import { useState } from 'react'
import Footer from '../Components/Footer'


function Question() {
  const [showModal, setShowModal] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleOptionClick = (selected) => {
    const correct = selected === 'transistor'
    setIsCorrect(correct)
    setShowModal(true)

    if (correct) {
      setProgress((prev) => Math.min(prev + 25, 25))
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }
  const getRedirectRoute = () => {
    return isCorrect ? '/Drag-Drop' : '/fin'
  }

  return (
    <div className='game-container'>
      <div className='top-bar'>
        <div className='progress-bar'>
          <div
            className='progress-fill'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className='stats'>
          <span className='power'>⚡ 145</span>
          <span className='energy'>🔵 4500</span>
          <span className='health'>❤️ 5</span>
        </div>
      </div>
 <div className="title-section">
        <h2>Which of these is a transistor?</h2>
      </div>
      <div className='main-content'>
        <div className='right-section'>
          <img src={flame} alt='Character Flame' className='character' />
        </div>

        <div className='left-section'>
          <div className='options'>
            <div className='option' onClick={() => handleOptionClick('atom')}>
              <img src={atom} alt='Atom' />
            </div>
            <div className='option' onClick={() => handleOptionClick('transistor')}>
              <img src={transistor} alt='Transistor' />
            </div>
            <div className='option' onClick={() => handleOptionClick('led')}>
              <img src={led} alt='LED' />
            </div>
          </div>
          <div className='question'></div>
        </div>
      </div>

     

      {showModal && <ModalQ isCorrect={isCorrect} onClose={closeModal}   redirectRoute={getRedirectRoute()} />}
    <Footer/>
    </div>
  )
}

export default Question;

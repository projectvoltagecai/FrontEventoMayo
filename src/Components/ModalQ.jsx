import React from 'react'
import '../assets/css/ModalQ.css'
import { Link } from 'react-router-dom' // O el router que uses

function ModalQ({ isCorrect, onClose, redirectRoute }) {
  return (
    <div className='modal-overlay' onClick={onClose}>
      <div 
        className={`modal-content ${isCorrect ? 'modal-correct' : 'modal-incorrect'}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{isCorrect ? '✅ Correct!' : '❌ Incorrect'}</h2>
        <p>
          {isCorrect
            ? 'Well done! That is a transistor.'
            : 'Oops! That is not a transistor.'}
        </p>
        
        {redirectRoute ? (
          <Link to={redirectRoute}>
            <button className='modal-button' onClick={onClose}>
              Close
            </button>
          </Link>
        ) : (
          <button className='modal-button' onClick={onClose}>
            Close
          </button>
        )}
      </div>
    </div>
  )
}

export default ModalQ
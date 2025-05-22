import React from "react";
import "../assets/css/Ppal.css"
function Ppal(){

    return (
        <>
        <Sidebar/>
        <MainContent/>
        <RightPanel/>
        </>
    )
}

export default Ppal

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src="/Voltage logo.png" alt="Voltage Logo" className="sidebar-logo" />
      <button>LEARN</button>
      <button>PRACTICE</button>
      <button>CHALLENGES</button>
      <button>PROFILE</button>
      <button>MORE</button>
    </aside>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <div className="lesson-header">LESSON 1</div>
      <div className="skills-grid">
        <div className="skill">
          <img src="/reading.jpg" alt="Reading" />
          <span>READING</span>
        </div>
        <div className="skill">
          <img src="/speaking.png" alt="Speaking" />
          <span>SPEAKING</span>
        </div>
        <div className="character-center">
          <img src="/personaje voltage.png" alt="Character" />
        </div>
        <div className="skill">
          <img src="/writing.png" alt="Writing" />
          <span>WRITING</span>
        </div>
        <div className="skill">
          <img src="/listening.png" alt="Listening" />
          <span>LISTENING</span>
        </div>
      </div>
    </main>
  );
}

function RightPanel() {
  return (
    <aside className="right-panel">
      <div className="top-stats">
        <span className="stat energy">⚡145</span>
        <span className="stat points">🔵4500</span>
        <span className="stat lives">❌5</span>
      </div>
      <div className="profile-box">
        <div className="profile-title">PROFILE</div>
        <div className="profile-info">
          <img src="/profile.png" alt="Profile" className="profile-pic" />
          <div>
            <div>Alejandro Melo Calderón</div>
            <div>ID 9999999</div>
            <div>Tecnología en Animación Digital</div>
            <div>Ficha: 2626891</div>
          </div>
        </div>
      </div>
      <div className="challenges-box">
        <div className="challenges-title">DAILY CHALLENGES</div>
        <ul>
          <li>⚡ Complete 1 level.</li>
          <li>⚡ Make a reading exercise.</li>
          <li>⚡ Reading a tale.</li>
        </ul>
      </div>
      <button className="level-btn">LEVEL 1</button>
    </aside>
  );
}


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado
import "../assets/css/CircuitDragDrop.css"
import Footer from '../Components/Footer';

const CircuitDragDrop = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [droppedItems, setDroppedItems] = useState({});
  const [score, setScore] = useState(0);
  const [touchItem, setTouchItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // Para la redirección

  const components = [
    { id: 'light-bulb', name: 'LIGHT BULB', color: '#4A90E2' },
    { id: 'resistor', name: 'RESISTOR', color: '#4A90E2' },
    { id: 'switch', name: 'SWITCH', color: '#4A90E2' },
    { id: 'battery', name: 'BATTERY', color: '#4A90E2' }
  ];

  // Posiciones ajustadas para sobreponer en el circuito
  const dropZones = [
    { id: 'light-bulb', x: '30%', y: '20%', width: '100px', height: '30px' },
    { id: 'resistor', x: '32%', y: '48%', width: '100px', height: '25px' },
    { id: 'switch', x: '70%', y: '38%', width: '100px', height: '25px' },
    { id: 'battery', x: '55%', y: '86%', width: '100px', height: '30px' }
  ];

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Redirigir cuando se complete el juego
  useEffect(() => {
    if (score === 4) {
      const timer = setTimeout(() => {
        // Cambia '/next-page' por la ruta a la que quieres redirigir
        navigate('/next-page');
      }, 2000); // Espera 2 segundos antes de redirigir
      
      return () => clearTimeout(timer);
    }
  }, [score, navigate]);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, zoneId) => {
    e.preventDefault();
    
    if (draggedItem && draggedItem.id === zoneId) {
      setDroppedItems(prev => ({
        ...prev,
        [zoneId]: draggedItem
      }));
      setScore(prev => prev + 1);
    }
    
    setDraggedItem(null);
  };

  // Eventos táctiles para móvil
  const handleTouchStart = (e, item) => {
    if (!isMobile) return;
    
    setTouchItem(item);
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    if (!touchItem || !isMobile) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    
    // Resaltar zona de drop
    document.querySelectorAll('.drop-zone').forEach(zone => {
      zone.classList.remove('touch-hover');
    });
    
    if (element && element.classList.contains('drop-zone')) {
      element.classList.add('touch-hover');
    }
  };

  const handleTouchEnd = (e) => {
    if (!touchItem || !isMobile) return;
    
    e.preventDefault();
    const touch = e.changedTouches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    
    if (element && element.classList.contains('drop-zone')) {
      const zoneId = element.dataset.zoneId;
      if (touchItem.id === zoneId) {
        setDroppedItems(prev => ({
          ...prev,
          [zoneId]: touchItem
        }));
        setScore(prev => prev + 1);
      }
    }
    
    // Limpiar estados
    document.querySelectorAll('.drop-zone').forEach(zone => {
      zone.classList.remove('touch-hover');
    });
    setTouchItem(null);
  };

  const resetGame = () => {
    setDroppedItems({});
    setScore(0);
    setDraggedItem(null);
    setTouchItem(null);
  };

  return (
    <div className="page-wrapper">
      <div className="circuit-container">
        {/* Header con estadísticas */}
        <div className="stats-header">
          <div className="stat-item">
            <span className="stat-icon">⚡</span>
            <span className="stat-number">145</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">🔵</span>
            <span className="stat-number">4500</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">❤️</span>
            <span className="stat-number">5</span>
          </div>
        </div>

        {/* Título */}
        <div className="title-section">
          <h2>Tag the different parts of a circuit</h2>
         
        </div>

        <div className="game-content">
          {/* Área del circuito con imagen */}
          <div className="circuit-area">
            {/* Aquí va tu imagen del circuito */}
            <img 
              src="/circuit.png" 
              alt="Circuit diagram" 
              className="circuit-image"
            />
            
            {/* Zonas de drop sobrepuestas */}
            {dropZones.map(zone => (
              <div
                key={zone.id}
                className={`drop-zone ${droppedItems[zone.id] ? 'filled' : ''} ${touchItem && touchItem.id === zone.id ? 'touch-target' : ''}`}
                style={{
                  left: zone.x,
                  top: zone.y,
                  width: zone.width,
                  height: zone.height
                }}
                data-zone-id={zone.id}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, zone.id)}
                onTouchStart={(e) => {
                  if (touchItem && touchItem.id === zone.id) {
                    setDroppedItems(prev => ({
                      ...prev,
                      [zone.id]: touchItem
                    }));
                    setScore(prev => prev + 1);
                    setTouchItem(null);
                  }
                }}
              >
                {droppedItems[zone.id] && (
                  <span className="dropped-label">
                    {droppedItems[zone.id].name}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Panel de componentes */}
          <div className="components-panel">
            <div className="components-list">
              {components.map(component => (
                !droppedItems[component.id] && (
                  <div
                    key={component.id}
                    className={`component-item ${touchItem && touchItem.id === component.id ? 'selected' : ''}`}
                    draggable={!isMobile}
                    onDragStart={(e) => handleDragStart(e, component)}
                    onTouchStart={(e) => handleTouchStart(e, component)}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ backgroundColor: component.color }}
                  >
                    {component.name}
                    {touchItem && touchItem.id === component.id && (
                      <span className="touch-indicator">👆 Seleccionado</span>
                    )}
                  </div>
                )
              ))}
            </div>
            
            {/* Mascota */}
            <div className="mascot">
              <img 
                src="/engranaje.png" 
                alt="Mascot" 
                className="mascot-image"
              />
            </div>
          </div>
        </div>

        {/* Panel de control */}
        <div className="control-panel">
          <div className="score">Puntuación: {score}/4</div>
          <button className="reset-btn" onClick={resetGame}>
            Reiniciar
          </button>
          {score === 4 && (
            <div className="success-message">
              ¡Excelente! Has completado el circuito correctamente 🎉
              <br />
              <span className="redirect-message">Redirigiendo en 2 segundos...</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer fuera del contenedor principal */}
     
    </div>
  );
};

export default CircuitDragDrop;
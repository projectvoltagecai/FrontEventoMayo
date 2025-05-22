import React, { useState } from 'react';
import "../assets/css/CircuitDragDrop.css"

const CircuitDragDrop = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [droppedItems, setDroppedItems] = useState({});
  const [score, setScore] = useState(0);

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

  const resetGame = () => {
    setDroppedItems({});
    setScore(0);
    setDraggedItem(null);
  };

  return (
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
              className={`drop-zone ${droppedItems[zone.id] ? 'filled' : ''}`}
              style={{
                left: zone.x,
                top: zone.y,
                width: zone.width,
                height: zone.height
              }}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, zone.id)}
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
                  className="component-item"
                  draggable
                  onDragStart={(e) => handleDragStart(e, component)}
                  style={{ backgroundColor: component.color }}
                >
                  {component.name}
                </div>
              )
            ))}
          </div>
          
          {/* Mascota - Aquí usarás tu imagen */}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default CircuitDragDrop;
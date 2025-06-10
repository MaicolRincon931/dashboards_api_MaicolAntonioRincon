import { useState } from 'react';
import { proyectos } from '../data/ProyectosData';
import Sidebar from './Sidebar';


export default function Overview() {

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const project = proyectos[selectedProjectIndex];

  // Resumen detalles
  const { fuentesDatos, panelesCreados, tablerosCreados } = project.resumen;
  const [selectedPanelIndex, setSelectedPanelIndex] = useState(0);
  const [selectedTableroIndex, setSelectedTableroIndex] = useState(0);

  return (
    <>
      <div className="dashboard-wrapper">
        <Sidebar />
        <div className="dashboard-content">
          <div className="main-header">
            <div className="header-right">
              <img src='/assets/user-avatar.png' alt="User Avatar" className="user-avatar" />
              <span className="admin-text">Admin</span>
            </div>
          </div>

          <h2 className='title'>Proyectos</h2>
          <div className="card project-select-card">
            <label htmlFor="project-select">Selecciona un proyecto</label>
            <select
              id="project-select"
              value={selectedProjectIndex}
              onChange={e => {
                const idx = parseInt(e.target.value, 10);
                setSelectedProjectIndex(idx);
                setSelectedPanelIndex(0);
                setSelectedTableroIndex(0);
              }}
            >
              {proyectos.map((p, idx) => (
                <option key={idx} value={idx}>{p.nombre}</option>
              ))}
            </select>

            <div className="project-details-with-image">
              {project.vistaPrevia && (
                <div className="preview project-preview">
                  <img
                    src={`/assets/${project.vistaPrevia}`}
                    alt={`Vista previa de ${project.nombre}`}
                  />
                </div>
              )}
              <div className="info-list project-info">
                <p><strong>Título del proyecto:</strong> {project.nombre}</p>
                <p><strong>Descripción:</strong> {project.descripcion || 'No registra'}</p>
                <p><strong>Fuentes de datos:</strong> {fuentesDatos.fuentes.join(', ')}</p>
                <p><strong>Total de fuentes:</strong> {fuentesDatos.total}</p>
              </div>
            </div>
          </div>

          <h2 className='title'>Resumen del proyecto</h2>
          <div className="summary-cards">

            
            <div className="card summary-card">
              <h3>Fuentes de datos</h3>
              <p><strong>Total:</strong> {fuentesDatos.total}</p>
              <ul className="list">
                {fuentesDatos.fuentes.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>

            
            <div className="card summary-card">
              <h3>Paneles creados</h3>
              <label htmlFor="panel-select">Selecciona un panel</label> 
              <select
                id="panel-select"
                value={selectedPanelIndex}
                onChange={e => setSelectedPanelIndex(parseInt(e.target.value, 10))}
              >
                
                {panelesCreados.paneles.length > 0 ? (
                  panelesCreados.paneles.map((p, idx) => (
                    <option key={idx} value={idx}>{p.nombre}</option>
                  ))
                ) : (
                  <option value={0}>No hay paneles disponibles</option>
                )}
              </select>
              
              {panelesCreados.paneles.length > 0 && (
                <div className="details-with-image"> 
                  <div className="preview">
                    <img
                      src={`/assets/${panelesCreados.paneles[selectedPanelIndex].vistaPrevia}`}
                      alt="Vista previa del panel"
                    />
                  </div>
                  <div className="info-list">
                    <p><strong>Nombre:</strong> {panelesCreados.paneles[selectedPanelIndex].nombre}</p>
                    <p><strong>Descripción:</strong> {panelesCreados.paneles[selectedPanelIndex].descripcion || 'No registra'}</p>
                    <p><strong>Creación:</strong> {panelesCreados.paneles[selectedPanelIndex].fechaCreacion}</p>
                    <p><strong>Modificación:</strong> {panelesCreados.paneles[selectedPanelIndex].fechaModificacion}</p>
                    <p><strong>Autor:</strong> {panelesCreados.paneles[selectedPanelIndex].autor}</p>
                  </div>
                </div>
              )}
              {panelesCreados.paneles.length === 0 && (
                <div className="info-list no-data">
                  <p>No hay detalles de paneles para mostrar.</p>
                </div>
              )}
            </div>

           
            <div className="card summary-card">
              <h3>Tableros creados</h3>
              <label htmlFor="tablero-select">Selecciona un tablero</label> 
              <select
                id="tablero-select"
                value={selectedTableroIndex}
                onChange={e => setSelectedTableroIndex(parseInt(e.target.value, 10))}
              >
               
                {tablerosCreados.tableros.length > 0 ? (
                  tablerosCreados.tableros.map((t, idx) => (
                    <option key={idx} value={idx}>{t.nombre}</option>
                  ))
                ) : (
                  <option value={0}>No hay tableros disponibles</option>
                )}
              </select>
             
              {tablerosCreados.tableros.length > 0 && (
                <div className="details-with-image"> 
                  <div className="preview">
                    <img
                      src={`/assets/${tablerosCreados.tableros[selectedTableroIndex].vistaPrevia}`}
                      alt="Vista previa del tablero"
                    />
                  </div>
                  <div className="info-list">
                    <p><strong>Nombre:</strong> {tablerosCreados.tableros[selectedTableroIndex].nombre}</p>
                    <p><strong>Descripción:</strong> {tablerosCreados.tableros[selectedTableroIndex].descripcion || 'No registra'}</p>
                    <p><strong>Creación:</strong> {tablerosCreados.tableros[selectedTableroIndex].fechaCreacion}</p>
                    <p><strong>Modificación:</strong> {tablerosCreados.tableros[selectedTableroIndex].fechaModificacion}</p>
                    <p><strong>Autor:</strong> {tablerosCreados.tableros[selectedTableroIndex].autor}</p>
                  </div>
                </div>
              )}
              {tablerosCreados.tableros.length === 0 && (
                <div className="info-list no-data">
                  <p>No hay detalles de tableros para mostrar.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

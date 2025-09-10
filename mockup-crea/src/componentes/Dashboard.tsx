// src/componentes/Dashboard.tsx
function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Panel de control y estadísticas</p>
      </div>
      
      <div className="dashboard-content">
        {/* Sección de estadísticas */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-info">
              <h3>Total Proyectos</h3>
              <p className="stat-number">15</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <h3>Completados</h3>
              <p className="stat-number">8</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⏰</div>
            <div className="stat-info">
              <h3>En Progreso</h3>
              <p className="stat-number">5</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <h3>Colaboradores</h3>
              <p className="stat-number">12</p>
            </div>
          </div>
        </div>

        {/* Sección de proyectos recientes */}
        <div className="recent-projects">
          <h2>Proyectos Recientes</h2>
          <div className="projects-list">
            <div className="project-item">
              <div className="project-info">
                <h3>Sistema de Inventario</h3>
                <p>Última actualización: Hace 2 horas</p>
              </div>
              <div className="project-status active">Activo</div>
            </div>
            
            <div className="project-item">
              <div className="project-info">
                <h3>App Móvil E-commerce</h3>
                <p>Última actualización: Hace 1 día</p>
              </div>
              <div className="project-status completed">Completado</div>
            </div>
            
            <div className="project-item">
              <div className="project-info">
                <h3>Portal Estudiantes</h3>
                <p>Última actualización: Hace 3 días</p>
              </div>
              <div className="project-status progress">En Progreso</div>
            </div>
          </div>
        </div>

        {/* Sección de actividad reciente */}
        <div className="recent-activity">
          <h2>Actividad Reciente</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">🔄</div>
              <div className="activity-info">
                <p><strong>Juan Pérez</strong> actualizó el proyecto "Sistema POS"</p>
                <span className="activity-time">Hace 30 minutos</span>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-icon">✨</div>
              <div className="activity-info">
                <p><strong>María González</strong> creó un nuevo proyecto</p>
                <span className="activity-time">Hace 2 horas</span>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-icon">💬</div>
              <div className="activity-info">
                <p><strong>Carlos Ruiz</strong> comentó en "App Inventario"</p>
                <span className="activity-time">Hace 4 horas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

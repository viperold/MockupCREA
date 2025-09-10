// src/componentes/Navbar.tsx
import { useState } from 'react';

function Navbar() {
  const [activeTab, setActiveTab] = useState('Inicio');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navItems = ['Inicio', 'Proyectos', 'Foro'];

  return (
    <nav className="modern-navbar">
      <div className="container">
        <div className="modern-navbar-content">
          
          {/* Logo y navegación */}
          <div className="navbar-left">
            {/* Logo */}
            <div className="navbar-logo">
              <div className="logo-icon">IP</div>
            </div>

            {/* Navegación principal */}
            <div className="navbar-nav">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`nav-link ${activeTab === item ? 'active' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Sección derecha */}
          <div className="navbar-right">
            
            {/* Botón Nuevo Proyecto */}
            <button className="new-project-btn">
              + Nuevo Proyecto
            </button>

            {/* Campana de notificaciones */}
            <div className="notification-container">
              <button 
                className="notification-btn"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                🔔
                <span className="notification-dot"></span>
              </button>
              
              {/* Dropdown de notificaciones */}
              {showNotifications && (
                <div className="notification-dropdown">
                  <div className="dropdown-header">Notificaciones</div>
                  <div className="notification-item">
                    <div className="notification-text">Nuevo mensaje en proyecto "App Inventario"</div>
                    <div className="notification-time">Hace 5 min</div>
                  </div>
                  <div className="notification-item">
                    <div className="notification-text">Te invitaron a colaborar en "Sistema POS"</div>
                    <div className="notification-time">Hace 1 hora</div>
                  </div>
                  <div className="notification-item">
                    <div className="notification-text">Nuevo proyecto disponible en tu área</div>
                    <div className="notification-time">Hace 2 horas</div>
                  </div>
                </div>
              )}
            </div>

            {/* Perfil de usuario */}
            <div className="user-container">
              <button 
                className="user-btn"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <div className="user-avatar-nav">JP</div>
              </button>
              
              {/* Dropdown del usuario */}
              {showUserMenu && (
                <div className="user-dropdown">
                  <div className="dropdown-header">
                    <div className="user-info-dropdown">
                      <div className="user-name">Juan Pérez</div>
                      <div className="user-email">juan.perez@inacap.cl</div>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item">👤 Mi Perfil</button>
                  <button className="dropdown-item">⚙️ Configuración</button>
                  <button className="dropdown-item">📊 Mis Estadísticas</button>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item logout">🚪 Cerrar Sesión</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
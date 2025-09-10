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
            <div className="notification-container group relative">
              <button 
                className="notification-btn"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                🔔
                <span className="notification-dot"></span>
              </button>
              
              {/* Dropdown de notificaciones - aparece con hover */}
              <div className="notification-dropdown opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-2">
                <div className="dropdown-header">Notificaciones</div>
                <div className="notification-item hover:bg-gray-50 transition-colors duration-200">
                  <div className="notification-text">Nuevo mensaje en proyecto "App Inventario"</div>
                  <div className="notification-time">Hace 5 min</div>
                </div>
                <div className="notification-item hover:bg-gray-50 transition-colors duration-200">
                  <div className="notification-text">Te invitaron a colaborar en "Sistema POS"</div>
                  <div className="notification-time">Hace 1 hora</div>
                </div>
                <div className="notification-item hover:bg-gray-50 transition-colors duration-200">
                  <div className="notification-text">Nuevo proyecto disponible en tu área</div>
                  <div className="notification-time">Hace 2 horas</div>
                </div>
              </div>
            </div>

            {/* Perfil de usuario */}
            <div className="user-container group relative">
              <button 
                className="user-btn"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <div className="user-avatar-nav">JP</div>
              </button>
              
              {/* Dropdown del usuario - aparece con hover */}
              <div className="user-dropdown opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-2">
                <div className="dropdown-header">
                  <div className="user-info-dropdown">
                    <div className="user-name">Juan Pérez</div>
                    <div className="user-email">juan.perez@inacap.cl</div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item hover:bg-gray-50 transition-colors duration-200">👤 Mi Perfil</button>
                <button className="dropdown-item hover:bg-gray-50 transition-colors duration-200">⚙️ Configuración</button>
                <button className="dropdown-item hover:bg-gray-50 transition-colors duration-200">📊 Mis Estadísticas</button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item logout hover:bg-red-50 transition-colors duration-200">🚪 Cerrar Sesión</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
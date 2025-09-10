// src/componentes/Navbar.tsx
import { useState, useEffect } from 'react';

function Navbar() {
  const [activeTab, setActiveTab] = useState('Inicio');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navItems = ['Inicio', 'Proyectos', 'Foro'];

  // Función para cerrar todos los menús
  const closeAllMenus = () => {
    setShowNotifications(false);
    setShowUserMenu(false);
    setShowMobileMenu(false);
  };

  // Función para manejar notificaciones
  const handleNotificationsClick = () => {
    setShowUserMenu(false);
    setShowMobileMenu(false);
    setShowNotifications(!showNotifications);
  };

  // Función para manejar menú de usuario
  const handleUserMenuClick = () => {
    setShowNotifications(false);
    setShowMobileMenu(false);
    setShowUserMenu(!showUserMenu);
  };

  // Función para manejar menú móvil
  const handleMobileMenuClick = () => {
    setShowNotifications(false);
    setShowUserMenu(false);
    setShowMobileMenu(!showMobileMenu);
  };

  // Cerrar menús al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.notification-container') && 
          !target.closest('.user-container') && 
          !target.closest('.mobile-menu-btn') &&
          !target.closest('.mobile-menu')) {
        closeAllMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="modern-navbar select-none">
      <div className="container">
        <div className="modern-navbar-content">
          
          {/* Logo y navegación */}
          <div className="navbar-left">
            {/* Logo */}
            <div className="navbar-logo">
              <div className="logo-icon select-none">IP</div>
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

            {/* Botón menú hamburguesa (solo móvil) */}
            <button 
              className="mobile-menu-btn"
              onClick={handleMobileMenuClick}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Sección derecha */}
          <div className="navbar-right">
            
            {/* Botón Nuevo Proyecto */}
            <button className="new-project-btn select-none">
              + Nuevo Proyecto
            </button>

            {/* Campana de notificaciones */}
            <div className="notification-container group relative">
              <button 
                className={`notification-btn ${showNotifications ? 'active' : ''}`}
                onClick={handleNotificationsClick}
              >
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                  <path d="m13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </button>
              
              {/* Dropdown de notificaciones - aparece con hover */}
              <div className="notification-dropdown opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-2 select-none">
                <div className="dropdown-header select-none">Notificaciones</div>
                <div className="notification-item hover:bg-gray-50 transition-colors duration-200 select-none">
                  <div className="notification-text select-none">Nuevo mensaje en proyecto "App Inventario"</div>
                  <div className="notification-time select-none">Hace 5 min</div>
                </div>
                <div className="notification-item hover:bg-gray-50 transition-colors duration-200 select-none">
                  <div className="notification-text select-none">Te invitaron a colaborar en "Sistema POS"</div>
                  <div className="notification-time select-none">Hace 1 hora</div>
                </div>
                <div className="notification-item hover:bg-gray-50 transition-colors duration-200 select-none">
                  <div className="notification-text select-none">Nuevo proyecto disponible en tu área</div>
                  <div className="notification-time select-none">Hace 2 horas</div>
                </div>
              </div>
            </div>

            {/* Perfil de usuario */}
            <div className="user-container group relative">
              <button 
                className="user-btn focus:outline-none"
                onClick={handleUserMenuClick}
              >
                <div className="user-avatar-nav select-none">JP</div>
              </button>
              
              {/* Dropdown del usuario - aparece con hover */}
              <div className="user-dropdown opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-2 select-none">
                <div className="dropdown-header select-none">
                  <div className="user-info-dropdown select-none">
                    <div className="user-name select-none">Juan Pérez</div>
                    <div className="user-email select-none">juan.perez@inacap.cl</div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item hover:bg-gray-50 transition-colors duration-200 select-none">👤 Mi Perfil</button>
                <button className="dropdown-item hover:bg-gray-50 transition-colors duration-200 select-none">⚙️ Configuración</button>
                <button className="dropdown-item hover:bg-gray-50 transition-colors duration-200 select-none">📊 Mis Estadísticas</button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item logout hover:bg-red-50 transition-colors duration-200 select-none">🚪 Cerrar Sesión</button>
              </div>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        {showMobileMenu && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  closeAllMenus();
                }}
                className={`mobile-nav-link ${activeTab === item ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
            <div className="mobile-menu-divider"></div>
            <button 
              className="mobile-nav-link new-project"
              onClick={() => {
                closeAllMenus();
                // Aquí puedes agregar lógica para "Nuevo Proyecto" en móvil
              }}
            >
              + Nuevo Proyecto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
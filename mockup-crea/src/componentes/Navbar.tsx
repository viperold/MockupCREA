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
                <button className="dropdown-item hover:bg-gray-50 transition-colors duration-200 select-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline mr-2">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  Mi Perfil
                </button>
                <button className="dropdown-item hover:bg-gray-50 transition-colors duration-200 select-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline mr-2">
                    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                  </svg>
                  Configuración
                </button>
                <button className="dropdown-item hover:bg-gray-50 transition-colors duration-200 select-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline mr-2">
                    <path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,13h4v6H4V13z M20,19h-4v-6h4V19z"/>
                  </svg>
                  Mis Estadísticas
                </button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item logout hover:bg-red-50 transition-colors duration-200 select-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline mr-2">
                    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                  </svg>
                  Cerrar Sesión
                </button>
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
                  // En móvil, solo cerramos el menú sin cambiar el estado visual del navbar
                  closeAllMenus();
                  // Aquí puedes agregar lógica de navegación sin cambiar activeTab
                  console.log(`Navegando a: ${item}`);
                }}
                className={`mobile-nav-link`}
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
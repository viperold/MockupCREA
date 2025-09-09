import React, { useState } from 'react';
import { Bell, Plus, User, Settings, LogOut, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');

  const navItems = ['Dashboard', 'Team', 'Projects', 'Calendar'];

  return (
    <nav className="bg-slate-800 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo y navegación principal */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-lg p-2 mr-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3L4 14h6l-2 7 9-11h-6l2-7z"/>
                </svg>
              </div>
            </div>

            {/* Navegación principal */}
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeTab === item
                      ? 'bg-slate-700 text-white border-b-2 border-blue-500'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Sección derecha */}
          <div className="flex items-center space-x-4">
            
            {/* Botón New Job */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors duration-200">
              <Plus className="w-4 h-4" />
              <span>New Job</span>
            </button>

            {/* Notificaciones */}
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors duration-200">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Perfil de usuario */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-1 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {/* Dropdown del perfil */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-700 rounded-lg shadow-lg border border-slate-600 py-1 z-50">
                  <div className="px-4 py-2 border-b border-slate-600">
                    <p className="text-sm font-medium text-white">John Doe</p>
                    <p className="text-xs text-slate-400">john@company.com</p>
                  </div>
                  
                  <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-600 hover:text-white flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Your profile</span>
                  </button>
                  
                  <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-600 hover:text-white flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </button>
                  
                  <hr className="my-1 border-slate-600" />
                  
                  <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-600 hover:text-white flex items-center space-x-2">
                    <LogOut className="w-4 h-4" />
                    <span>Sign out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Ejemplo de uso en una página
const App = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      {/* Contenido de ejemplo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-800 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-white mb-4">Dashboard Content</h1>
          <p className="text-slate-300">
            Este es el contenido principal de tu aplicación. La navbar se mantiene fija en la parte superior
            y puede ser reutilizada en todas las páginas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
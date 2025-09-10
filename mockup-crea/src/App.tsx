import { useState } from 'react'
import Navbar from './componentes/Navbar'
import Dashboard from './componentes/Dashboard'
import Footer from './componentes/Footer'
import './index.css'
import './assets/css/navbar.css'
import './assets/css/footer.css'
import './assets/css/dashboard.css'
import './assets/css/hero.css'

// Le digo a JavaScript: "Oye, voy a crear una función que se llama App"
function App() {
  // Estado para controlar qué sección mostrar
  const [activeSection, setActiveSection] = useState('Inicio')

  // Función para renderizar el contenido según la sección activa
  const renderContent = () => {
    switch(activeSection) {
      case 'Inicio':
        return (
          <>
            {/* Sección Héroe con nueva paleta de colores */}
            <section className="relative min-h-[80vh] md:min-h-[75vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-dark-gradient">
              {/* Banner superior opcional */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-sm text-blue-200">
                  <span className="opacity-80">Conectando estudiantes y proyectos. </span>
                  <button className="text-blue-300 hover:text-white transition-colors underline">
                    Conoce más →
                  </button>
                </div>
              </div>
              
              {/* Gradiente animado de fondo - Paleta azul oscuro */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 via-indigo-900 to-purple-900 animate-gradient-xy opacity-90"></div>
              
              {/* Segundo layer de gradiente para profundidad */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-blue-900/40 to-transparent"></div>
              
              {/* Partículas flotantes mejoradas */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-white to-blue-200 rounded-full animate-float-slow opacity-60"></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gradient-to-r from-blue-200 to-white rounded-full animate-float-medium opacity-80"></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gradient-to-r from-purple-300 to-blue-200 rounded-full animate-float-fast opacity-40"></div>
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-gradient-to-r from-white to-indigo-200 rounded-full animate-float-slow opacity-70"></div>
              </div>
              
              {/* Contenido principal - Estilo similar a la imagen */}
              <div className="relative z-10 text-center text-white max-w-4xl px-4 sm:px-6 py-4 sm:py-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in-up">
                  Impulsa tu futuro con 
                  <br />
                  <span className="text-white">
                    Inacap Projects
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                  Conecta, colabora y crea proyectos increíbles junto a otros estudiantes. 
                  Tu plataforma para transformar ideas en realidad.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
                  <button 
                    className="group w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-3 min-w-[160px] sm:min-w-[180px]"
                    onClick={() => setActiveSection('Proyectos')}
                  >
                    Crear Proyecto
                  </button>
                  
                  <button 
                    className="group w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-transparent border border-gray-300 hover:bg-white hover:text-gray-900 text-white text-base sm:text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 min-w-[160px] sm:min-w-[180px]"
                    onClick={() => setActiveSection('Dashboard')}
                  >
                    Ver Dashboard
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:translate-x-1">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Indicador de scroll - Más pequeño */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-0 border-l-0 transform rotate-45 opacity-70"></div>
              </div>
            </section>

            {/* Sección de características - Más compacta */}
            <section className="py-12 bg-white">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">🚀 Proyectos Activos</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">Mantén el control de todos tus proyectos en curso con herramientas intuitivas y colaborativas.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">👥 Colaboración</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">Trabaja en equipo, comparte ideas y conecta con estudiantes de tu área de estudio.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">📊 Estadísticas</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">Visualiza el progreso de tus proyectos con métricas detalladas y reportes en tiempo real.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )
      case 'Dashboard':
        return <Dashboard />
      case 'Proyectos':
        return (
          <div className="proyectos-content">
            <h1>Mis Proyectos</h1>
            <p>Aquí verás todos tus proyectos</p>
            <div className="project-grid">
              <div className="project-card">
                <h3>Sistema de Inventario</h3>
                <p>Aplicación web para gestión de inventarios</p>
                <span className="status active">Activo</span>
              </div>
              <div className="project-card">
                <h3>App Móvil E-commerce</h3>
                <p>Aplicación móvil para tienda online</p>
                <span className="status completed">Completado</span>
              </div>
            </div>
          </div>
        )
      case 'Foro':
        return (
          <div className="foro-content">
            <h1>Foro de Discusión</h1>
            <p>Conecta con otros estudiantes y comparte conocimiento</p>
            <div className="forum-topics">
              <div className="topic-item">
                <h3>💡 Ideas de Proyectos</h3>
                <p>Comparte y descubre nuevas ideas para proyectos</p>
              </div>
              <div className="topic-item">
                <h3>🔧 Ayuda Técnica</h3>
                <p>Resuelve dudas técnicas con la comunidad</p>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="inicio-content">
            <h1>Bienvenido a Inacap Projects</h1>
          </div>
        )
    }
  }

  // La función devuelve (entrega) código HTML cuando alguien la use
  return (
    <div className="app-container">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        {activeSection === 'Inicio' ? (
          // Para la página de inicio, renderizamos sin el contenedor main
          <div>
            {renderContent()}
          </div>
        ) : (
          // Para otras páginas, usamos el layout normal
          <main className="main-content">
            <div className="container">
              {renderContent()}
            </div>
          </main>
        )}
      <Footer />
    </div>
  )
}

// Permitir que otros archivos usen esta receta
export default App
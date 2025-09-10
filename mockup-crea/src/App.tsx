import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer'
import './index.css'
import './assets/css/navbar.css'
import './assets/css/footer.css'
// Le digo a JavaScript: "Oye, voy a crear una función que se llama MiNuevoComponente"
function App() {

  // La función devuelve (entrega) código HTML cuando alguien la use
  // Cuando alguien use esta receta, entrégale esto:
  // Es como decir "el resultado final es...

  return (
    <div className="app-container">
      <Navbar />
        <header>
          <div className="container">
            <div className="header-content">
              <div className="logo">Inacap Projects</div>
            </div>
          </div>
        </header>
        <main className="main-content">
          <div className="container">
          </div>
        </main>
      <Footer />
    </div>
  
  )
}

// Permitir que otros archivos usen esta receta
// Le digo a JavaScript: "Esta función se puede usar en otros archivos"
export default App
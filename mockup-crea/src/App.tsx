import Header from './componentes/Header'
import Navbar from './componentes/Navbar'  // ← Agregar esta línea
import Footer from './componentes/Footer'
import './index.css'


// Le digo a JavaScript: "Oye, voy a crear una función que se llama MiNuevoComponente"
function App() {

  // La función devuelve (entrega) código HTML cuando alguien la use
  //Cuando alguien use esta receta, entrégale esto:
  // Es como decir "el resultado final es...
  return (
    <div>
      <Header />
      <Navbar />
      <main className="main-content">
        <div className="container">
        </div>
      <Footer />
      </main>
    </div>
  )
}

// Permitir que otros archivos usen esta receta
// Le digo a JavaScript: "Esta función se puede usar en otros archivos"
export default App
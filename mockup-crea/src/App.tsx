import Header from './componentes/Header'
import Navbar from './componentes/Navbar'  // ← Agregar esta línea
import './index.css'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="main-content">
        <div className="container">
          <section className="hero">
            <h1>Conecta talentos, crea futuros</h1>
            <button className="btn btn-primary">Únete Ahora</button>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

const App = () => {
  const [cart, setCart] = useState([])

  // Función para añadir productos al carrito (estado global)
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <BrowserRouter>
      {/* Navbar se queda fuera de Routes para que siempre sea visible */}
      <Navbar cartCount={cart.length} />

      <div className='app-container'>
        <Routes>
          {/* Ruta principal (Home) */}
          <Route path="/" element={<Home addToCart={addToCart} />} />

          {/* Rutas secundarias */}
          <Route path="/about" element={<h2>About Our Store</h2>} />
          <Route path="/contact" element={<h2>Contact Us</h2>} />

          {/* Ruta del carrito */}
          <Route path="/cart" element={<h2>Your Shopping Cart ({cart.length} items)</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Checkout from './pages/Checkout/Checkout'
import Success from './pages/Success/Success'
import SplashScreen from './components/SplashScreen/SplashScreen'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import { CartProvider } from './context/CartContext'
import NotFound from './pages/404/404'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Wait for the animation to finish (3s delay + 0.5s fadeOut)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <SplashScreen />}
      <CartProvider>
        <BrowserRouter>
          {/* Navbar se queda fuera de Routes para que siempre sea visible */}
          <Navbar />

          <div className='app-container'>
            <Routes>
              {/* Ruta principal (Home) */}
              <Route path="/" element={<Home />} />

              {/* Rutas secundarias */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Ruta del carrito */}
              <Route path="/cart" element={<Cart />} />

              {/* Ruta del detalle del producto */}
              <Route path="/product/:id" element={<ProductDetail />} />

              {/* Ruta de checkout */}
              <Route path="/checkout" element={<Checkout />} />

              {/* Ruta de exito */}
              <Route path="/success" element={<Success />} />

              {/* Ruta de 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
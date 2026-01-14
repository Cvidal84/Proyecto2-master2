import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import ProductDetail from './pages/ProductDetail/ProductDetail'

const App = () => {
  const [cart, setCart] = useState([])

  // Función para añadir productos al carrito (estado global)
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Buscamos si el producto ya está en el carrito
      const isProductInCart = prevCart.find((item) => item.id === product.id);

      if (isProductInCart) {
        // Si está, mapeamos el carrito y sumamos 1 a la cantidad del producto coincidente
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Si no está, lo añadimos con cantidad 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    // Filtramos para quitar el producto completamente por su ID
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <BrowserRouter>
      {/* Navbar se queda fuera de Routes para que siempre sea visible */}
      <Navbar cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />

      <div className='app-container'>
        <Routes>
          {/* Ruta principal (Home) */}
          <Route path="/" element={<Home addToCart={addToCart} />} />

          {/* Rutas secundarias */}
          <Route path="/about" element={<h2>About Our Store</h2>} />
          <Route path="/contact" element={<h2>Contact Us</h2>} />

          {/* Ruta del carrito */}
          <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} />

          {/* Ruta del detalle del producto */}
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
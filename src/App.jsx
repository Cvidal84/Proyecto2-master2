import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import ProductCard from './components/ProductCard/ProductCard'

const App = () => {
  //definir estados
  const [products, setProducts] = useState([]) //lista original api
  const [loading, setLoading] = useState(true) //saber si esta cargando
  const [searchTerm, setSearchTerm] = useState('') //lo que el usuario escribe

  //llamar a la API al cargar la pagina
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error al cargar los productos", error)
        setLoading(false)
      })
  }, [])

  //filtrar productos
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  //renderizar

  return (
    <div className='app-container'>
      <h1>Fake Store Market</h1>
      <SearchBar onSearch={setSearchTerm} />

      {loading ? (
        <p className="loading-text">Loading products...</p>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      {!loading && filteredProducts.length === 0 && (
        <p className="no-results">No products found with "{searchTerm}"</p>
      )}
    </div>
  )
}

export default App

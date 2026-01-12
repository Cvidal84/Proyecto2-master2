import { useState, useEffect } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Home.css'

const Home = ({ addToCart }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json)
                setLoading(false)
            })
            .catch(error => {
                console.error("Error loading products", error)
                setLoading(false)
            })
    }, [])

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="home-page">
            <SearchBar onSearch={setSearchTerm} />

            {loading ? (
                <p>Loading products...</p>
            ) : (
                <div className="products-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            )}

            {!loading && filteredProducts.length === 0 && (
                <p>No products found with "{searchTerm}"</p>
            )}
        </div>
    )
}

export default Home
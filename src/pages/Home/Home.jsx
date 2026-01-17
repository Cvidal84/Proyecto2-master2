import { useState, useEffect } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Home.css'


const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        console.log("Fetching products...");
        fetch('https://fakestoreapi.com/products')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(json => {
                console.log("Products loaded:", json);
                setProducts(json)
                setLoading(false)
            })
            .catch(error => {
                console.error("Error loading products:", error)
                setError(error.message)
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
            ) : error ? (
                <div className="error-message">
                    <p>Error loading products: {error}</p>
                    <p>Please check your internet connection and try again.</p>
                </div>
            ) : (
                <div className="products-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
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
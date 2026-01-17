import { useState, useEffect } from 'react'
import { products as mockProducts } from '../../data/products'
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
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        fetch('https://fakestoreapi.com/products', { signal: controller.signal })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(json => {
                console.log("Products loaded from API:", json);
                setProducts(json)
                setLoading(false)
                clearTimeout(timeoutId);
            })
            .catch(err => {
                console.warn("Fetch failed or timed out, using mock data.", err);
                setProducts(mockProducts);
                setError("API unavailable. Showing offline data.");
                setLoading(false);
            })

        return () => clearTimeout(timeoutId);
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
                <div>
                    <div className="error-message" style={{ backgroundColor: '#fff3cd', color: '#856404', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}>
                        ⚠️ {error}
                    </div>
                    <div className="products-grid">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
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
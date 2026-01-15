import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetail.css';

const ProductDetail = ({ addToCart }) => {
    const { id } = useParams(); // Obtenemos el ID del producto
    const [product, setProduct] = useState(null); // Inicializamos el producto
    const [loading, setLoading] = useState(true); // Inicializamos el loading

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="loading">Loading...</p>;

    return (
        <div className="product-detail">
            <div className="product-detail-card">
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p className="product-price">{product.price}€</p>
                <p className="product-description">{product.description}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetail;
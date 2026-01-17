import './ProductCard.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'


const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    return (
        <div className="card">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
            </Link>
            <p className="card-price">{product.price}€</p>
            <button className="add-button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>

    );
}
export default ProductCard
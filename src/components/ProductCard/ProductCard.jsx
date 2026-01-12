import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">{product.price}€</p>
            <button className="add-button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>

    );
}
export default ProductCard
import './Cart.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Cart = () => {
    const { cart: cartItems, removeFromCart } = useCart();
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p>Cart is empty. Buy something from the Home page</p>
            ) : (
                <div className="cart-container">
                    <div className="cart-list">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} />
                                <div className="cart-item-info">
                                    <h4>{item.title}</h4>
                                    <p className="cart-item-price">
                                        {item.price}€
                                        {item.quantity > 1 && <span className="quantity-badge"> x{item.quantity}</span>}
                                    </p>
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Summary</h3>
                        <p className="total-amount">Total to pay: <span>{total.toFixed(2)}€</span></p>
                        <Link to="/checkout" className="shopping-button">Checkout</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
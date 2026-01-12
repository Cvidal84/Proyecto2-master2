import './Cart.css';

const Cart = ({ cartItems }) => {
    // Calculamos el precio total sumando todos los productos
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p>Cart is empty. Buy something from the Home page</p>
            ) : (
                <div className="cart-container">
                    <div className="cart-list">
                        {cartItems.map((item, index) => (
                            /* Usamos index porque el mismo ID puede repetirse si compras dos veces lo mismo */
                            <div key={index} className="cart-item">
                                <img src={item.image} alt={item.title} />
                                <div className="cart-item-info">
                                    <h4>{item.title}</h4>
                                    <p className="cart-item-price">{item.price}€</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Summary</h3>
                        <p>Total of products: {cartItems.length}</p>
                        <p className="total-amount">Total to pay: <span>{total.toFixed(2)}€</span></p>
                        <button className="checkout-btn">Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
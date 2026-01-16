import { Link } from 'react-router-dom';
import './Navbar.css'
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const { cart } = useCart();
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/"><h2>FakeStore</h2></Link>
            </div>
            <ul className="navbar-links">
                {/* Usamos Link to="..." en lugar de a href */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li className="cart-icon">
                    <Link to="/cart">
                        <span>🛒</span>
                        <span className="cart-count">{cartCount}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar
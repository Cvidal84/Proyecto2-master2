import { Link } from "react-router-dom";
import './Success.css';

const Success = () => {
    return (
        <div className="success-page">
            <div className="success-card">
                <span className="success-icon">✅</span>
                <h1>¡Pedido Completado!</h1>
                <p>Gracias por tu compra. En **48 horas** recibirás el producto en la dirección indicada.</p>
                <Link to="/" className="back-home">Return to Shop</Link>
            </div>
        </div>
    );
};

export default Success;

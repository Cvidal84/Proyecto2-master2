import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = ({ cartItems, clearCart }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        clearCart();
        navigate('/success');//al terminar vamos a la pagina de exito
    };
    return (
        <div className='checkout-page'>
            <h2>Shipping Details</h2>
            <form onSubmit={handleSubmit} className='checkout-form'>
                <input type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} />
                <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
                <input type="text" placeholder='Telephone' name='telephone' value={formData.telephone} onChange={handleChange} />
                <input type="text" placeholder='Address' name='address' value={formData.address} onChange={handleChange} />
                <input type="text" placeholder='City' name='city' value={formData.city} onChange={handleChange} />
                <input type="text" placeholder='State' name='state' value={formData.state} onChange={handleChange} />
                <input type="text" placeholder='Zip' name='zip' value={formData.zip} onChange={handleChange} />
                <div className="order-total">
                    <p>You are about to pay for {cartItems.length} items</p>
                </div>
                <button type='submit'>Confirm Order</button>
            </form>
        </div>
    )
}

export default Checkout;

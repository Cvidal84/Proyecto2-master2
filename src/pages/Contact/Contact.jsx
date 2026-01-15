import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="contact-success">
                <div className="success-message">
                    <span>📩</span>
                    <h2>Message Received!</h2>
                    <p>Since this is a <strong>FakeShop</strong>, we've sent a copy of your inquiry to: <strong>{email}</strong></p>
                    <p>Please check your inbox (and your imagination) for our reply!</p>
                    <button onClick={() => setSubmitted(false)}>Send another message</button>
                </div>
            </div>
        );
    }

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>Have questions? Our fake team is ready to help you 24/7.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                </div>

                <div className="form-group">
                    <label>Your Email Address</label>
                    <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Subject</label>
                    <select>
                        <option>Order Status</option>
                        <option>Product Inquiry</option>
                        <option>Fake Refund</option>
                        <option>Technical Support</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea rows="5" placeholder="How can we help you?" required></textarea>
                </div>

                <button type="submit" className="contact-btn">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
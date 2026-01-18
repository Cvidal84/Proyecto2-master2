import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submittedEmail, setSubmittedEmail] = useState('');

    const onSubmit = (data) => {
        setSubmittedEmail(data.email);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="contact-success">
                <div className="success-message">
                    <span>📩</span>
                    <h2>Message Received!</h2>
                    <p>Since this is a <strong>FakeShop</strong>, we've sent a copy of your inquiry to: <strong>{submittedEmail}</strong></p>
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

            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        {...register("fullName", { required: true })}
                    />
                    {errors.fullName && <span className="error-message">This field is required</span>}
                </div>

                <div className="form-group">
                    <label>Your Email Address</label>
                    <input
                        type="email"
                        placeholder="john@example.com"
                        {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i
                        })}
                    />
                    {errors.email?.type === 'required' && <span className="error-message">Email is required</span>}
                    {errors.email?.type === 'pattern' && <span className="error-message">Invalid email format</span>}
                </div>

                <div className="form-group">
                    <label>Subject</label>
                    <select {...register("subject")}>
                        <option>Order Status</option>
                        <option>Product Inquiry</option>
                        <option>Fake Refund</option>
                        <option>Technical Support</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        rows="5"
                        placeholder="How can we help you?"
                        {...register("message", { required: true })}
                    ></textarea>
                    {errors.message && <span className="error-message">Message is required</span>}
                </div>

                <button type="submit" className="contact-btn">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
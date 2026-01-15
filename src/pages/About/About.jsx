import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <section className="about-hero">
                <h1>Our Story</h1>
                <p>Revolutionizing the digital marketplace since 2026.</p>
            </section>

            <section className="about-content">
                <div className="about-text">
                    <h2>How FakeStore was born</h2>
                    <p>
                        FakeStore was founded on the idea of democratizing access to high-quality
                        products worldwide. What started as a small classroom project evolved
                        into a leading platform for fictional e-commerce.
                    </p>
                    <p>
                        Our mission is simple: to provide a seamless user experience while
                        exploring our carefully curated catalog powered by the FakeStore API.
                    </p>
                </div>

                <div className="about-values">
                    <div className="value-card">
                        <span>🚀</span>
                        <h3>Innovation</h3>
                        <p>Always at the forefront of the latest web technologies.</p>
                    </div>
                    <div className="value-card">
                        <span>🌍</span>
                        <h3>Global</h3>
                        <p>We ship your dreams to any corner of the world.</p>
                    </div>
                    <div className="value-card">
                        <span>💎</span>
                        <h3>Quality</h3>
                        <p>We only work with the best digital products in the market.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
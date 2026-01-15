import React from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
    return (
        <div className="splash-screen">
            <div className="splash-content">
                <h1 className="splash-logo">FakeStore</h1>
                <div className="splash-ribbon"></div>
                <p className="splash-text">Welcome</p>
            </div>
        </div>
    );
};

export default SplashScreen;

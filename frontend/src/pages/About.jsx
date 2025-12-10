import React from 'react';

const About = () => {
    return (
        <div className="container" style={{ padding: '4rem 20px', maxWidth: '800px' }}>
            <h1 className="text-center mb-4">About <span className="text-accent">RannaGhor</span></h1>

            <div className="card p-4">
                <p className="mb-4" style={{ fontSize: '1.1rem' }}>
                    RannaGhor means "Kitchen" in Bengali. We started with a simple mission: to bring the authentic taste of home-cooked meals to your plate.
                </p>
                <p className="mb-4" style={{ fontSize: '1.1rem' }}>
                    Our chefs are passionate about using traditional recipes and fresh, local ingredients to create dishes that warm your soul. Whether you're craving a spicy biryani or a comforting burger, we have something for everyone.
                </p>
                <p style={{ fontSize: '1.1rem' }}>
                    We believe food is more than just sustenance; it's a way to bring people together. Thank you for being a part of our journey.
                </p>
            </div>
        </div>
    );
};

export default About;

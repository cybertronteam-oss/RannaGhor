import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section style={{
                position: 'relative',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                background: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(/images/biryani.png) no-repeat center center/cover'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Taste the <span className="text-accent">Home</span></h1>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Authentic, delicious, and made with love. Experience the finest flavors delivered straight to your table.
                    </p>
                    <Link to="/menu" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 3rem' }}>
                        Order Now
                    </Link>
                </div>
            </section>

            <section className="container" style={{ padding: '4rem 20px' }}>
                <h2 className="text-center mb-4">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginTop: '3rem' }}>
                    <div className="text-center">
                        <h3 className="text-accent">Fresh Ingredients</h3>
                        <p className="text-secondary">We use only the freshest, locally sourced ingredients for every dish.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-accent">Fast Delivery</h3>
                        <p className="text-secondary">Hot and fresh food delivered to your doorstep in record time.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-accent">Authentic Taste</h3>
                        <p className="text-secondary">Recipes passed down through generations for that perfect home-cooked feel.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';

const OrderSuccess = () => {
    const location = useLocation();
    const { orderId } = location.state || {};

    if (!orderId) {
        return <Navigate to="/" />;
    }

    return (
        <div className="container text-center" style={{ padding: '6rem 20px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
            <h1 className="text-accent mb-4">Order Placed Successfully!</h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                Thank you for your order. We are preparing your delicious food now.
            </p>

            <div className="card p-4" style={{ maxWidth: '400px', margin: '0 auto 2rem' }}>
                <p className="text-secondary">Order ID</p>
                <code style={{ background: 'var(--bg-primary)', padding: '0.5rem', borderRadius: '4px', display: 'block', marginTop: '0.5rem' }}>
                    {orderId}
                </code>
            </div>

            <Link to="/" className="btn btn-outline">Back to Home</Link>
        </div>
    );
};

export default OrderSuccess;

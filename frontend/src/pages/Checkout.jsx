import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import api from '../api';

const Checkout = () => {
    const { cart, total, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (cart.length === 0) {
        navigate('/cart');
        return null;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Basic validation
        if (!formData.name || !formData.phone || !formData.address) {
            setError('Please fill in all fields');
            setLoading(false);
            return;
        }

        try {
            const orderData = {
                customer: formData,
                items: cart,
                total: total
            };

            const response = await api.post('/orders', orderData);

            clearCart();
            navigate('/order-success', { state: { orderId: response.data.orderId } });
        } catch (err) {
            setError('Failed to place order. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ padding: '2rem 20px', maxWidth: '800px' }}>
            <h1 className="mb-4 text-center">Checkout</h1>

            <div className="card p-4">
                <form onSubmit={handleSubmit}>
                    {error && <div style={{ color: '#ef4444', marginBottom: '1rem' }}>{error}</div>}

                    <div className="mb-4">
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 234 567 8900"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Delivery Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="123 Main St, Apt 4B"
                            rows="3"
                            required
                        />
                    </div>

                    <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--bg-primary)' }}>
                        <div className="flex justify-between mb-4">
                            <span style={{ fontWeight: 'bold' }}>Total Amount</span>
                            <span className="text-accent" style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>${total.toFixed(2)}</span>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%' }}
                            disabled={loading}
                        >
                            {loading ? 'Placing Order...' : 'Place Order'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;

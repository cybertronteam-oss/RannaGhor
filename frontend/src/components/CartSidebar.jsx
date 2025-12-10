import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';
import api from '../api';

const CartSidebar = ({ isOpen, onClose }) => {
    const { cart, total, clearCart } = useCart();
    const [step, setStep] = useState('cart'); // 'cart' | 'checkout' | 'success'
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
    const [orderId, setOrderId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await api.post('/orders', {
                customer: formData,
                items: cart,
                total
            });
            setOrderId(response.data.orderId);
            clearCart();
            setStep('success');
        } catch (err) {
            alert('Failed to place order');
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        onClose();
        // Reset after animation
        setTimeout(() => {
            setStep('cart');
            setOrderId(null);
            setFormData({ name: '', phone: '', address: '' });
        }, 300);
    }

    return (
        <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={handleClose}>
            <div className="sidebar" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="flex justify-between items-center mb-6" style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>
                        {step === 'cart' && 'Your Cart'}
                        {step === 'checkout' && 'Checkout Detail'}
                        {step === 'success' && 'Order Placed'}
                    </h2>
                    <button onClick={handleClose} className="btn-icon" style={{ width: '32px', height: '32px' }}>
                        &times;
                    </button>
                </div>

                {/* Content Area - Scrollable */}
                <div style={{ flex: 1, overflowY: 'auto', paddingRight: '5px' }}>

                    {/* STEP 1: CART LIST */}
                    {step === 'cart' && (
                        <>
                            {cart.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.3 }}>🛒</div>
                                    <p className="text-muted">Your cart is currently empty.</p>
                                    <button onClick={handleClose} className="btn btn-outline mt-4">Browse Menu</button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    {cart.map(item => <CartItem key={item.id} item={item} />)}
                                </div>
                            )}
                        </>
                    )}

                    {/* STEP 2: CHECKOUT FORM */}
                    {step === 'checkout' && (
                        <div className="flex flex-col gap-6">
                            <div className="card" style={{ padding: '1rem', background: '#FFF7ED', borderColor: '#FFEDD5' }}>
                                <h4 style={{ color: '#C2410C', marginBottom: '0.5rem' }}>Order Summary</h4>
                                <div className="flex justify-between text-muted text-sm mb-1">
                                    <span>Items ({cart.length})</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between font-bold text-main">
                                    <span>Total to Pay</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <form id="checkout-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div>
                                    <label className="text-muted text-sm font-bold mb-1 block">Full Name</label>
                                    <input
                                        placeholder="e.g. John Doe"
                                        required
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-muted text-sm font-bold mb-1 block">Phone Number</label>
                                    <input
                                        placeholder="e.g. +1 234 567 890"
                                        required
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-muted text-sm font-bold mb-1 block">Delivery Address</label>
                                    <textarea
                                        placeholder="Street, City, Zip Code"
                                        required
                                        rows="3"
                                        value={formData.address}
                                        onChange={e => setFormData({ ...formData, address: e.target.value })}
                                    />
                                </div>
                            </form>
                        </div>
                    )}

                    {/* STEP 3: SUCCESS */}
                    {step === 'success' && (
                        <div className="flex flex-col items-center justify-center text-center py-8">
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                            <h3 className="text-primary mb-2">Order Confirmed!</h3>
                            <p className="text-muted mb-6">
                                We've received your order and are prepping it now.
                            </p>
                            <div className="card p-4 w-full" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
                                <small className="text-muted uppercase tracking-widest font-bold text-xs">Order ID</small>
                                <p className="font-mono mt-2" style={{ fontSize: '1.25rem', letterSpacing: '-1px' }}>{orderId}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                    {step === 'cart' && cart.length > 0 && (
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center text-lg font-bold">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <button onClick={() => setStep('checkout')} className="btn btn-primary w-full">
                                Proceed to Checkout
                            </button>
                        </div>
                    )}
                    {step === 'checkout' && (
                        <div className="flex gap-4">
                            <button onClick={() => setStep('cart')} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
                            <button
                                form="checkout-form"
                                type="submit"
                                disabled={loading}
                                className="btn btn-primary"
                                style={{ flex: 2 }}
                            >
                                {loading ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                            </button>
                        </div>
                    )}
                    {step === 'success' && (
                        <button onClick={handleClose} className="btn btn-primary w-full">Continue Shopping</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;

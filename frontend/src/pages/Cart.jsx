import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { cart, total, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container text-center" style={{ padding: '4rem 20px' }}>
                <h2>Your Cart is Empty</h2>
                <p className="mb-4">Looks like you haven't added anything yet.</p>
                <Link to="/menu" className="btn btn-primary">Browse Menu</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '2rem 20px' }}>
            <h1 className="mb-4">Your <span className="text-accent">Cart</span></h1>

            <div className="grid gap-8" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'start' }}>
                <div>
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <button onClick={clearCart} className="btn btn-outline" style={{ marginTop: '1rem' }}>Clear Cart</button>
                </div>

                <div className="card p-4">
                    <h3>Order Summary</h3>
                    <div className="flex justify-between mb-4 mt-4" style={{ borderTop: '1px solid var(--bg-primary)', paddingTop: '1rem' }}>
                        <span>Total</span>
                        <span className="text-accent" style={{ fontWeight: 'bold' }}>${total.toFixed(2)}</span>
                    </div>
                    <Link to="/checkout" className="btn btn-primary" style={{ width: '100%' }}>
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;

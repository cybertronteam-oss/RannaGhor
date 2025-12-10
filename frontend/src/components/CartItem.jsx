import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartItem = ({ item }) => {
    const { updateQty, removeFromCart } = useCart();

    return (
        <div className="flex items-center gap-4 p-3 rounded-xl" style={{ border: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
            {/* Small thumbnail if available, or just text */}
            <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '12px' }}
            />

            <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', fontWeight: '700' }}>{item.name}</h4>
                <p className="text-primary font-bold text-sm">${item.price}</p>
            </div>

            <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-1" style={{ border: '1px solid var(--border)', borderRadius: '99px', padding: '2px' }}>
                    <button
                        onClick={() => updateQty(item.id, -1)}
                        className="btn-icon"
                        style={{ width: '24px', height: '24px', border: 'none', background: 'transparent' }}
                    >
                        -
                    </button>
                    <span style={{ fontSize: '0.9rem', width: '20px', textAlign: 'center', fontWeight: '600' }}>{item.qty}</span>
                    <button
                        onClick={() => updateQty(item.id, 1)}
                        className="btn-icon"
                        style={{ width: '24px', height: '24px', border: 'none', background: 'transparent' }}
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ color: '#EF4444', fontSize: '0.75rem', fontWeight: '600', textDecoration: 'none' }}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;

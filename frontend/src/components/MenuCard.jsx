import React from 'react';
import { useCart } from '../contexts/CartContext';

const MenuCard = ({ item }) => {
    const { addToCart } = useCart();

    return (
        <div className="card">
            <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src={item.imageUrl} alt={item.name} className="card-img" />
            </div>
            <div className="card-body">
                <div className="flex justify-between items-start mb-2">
                    <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{item.name}</h3>
                    <span className="text-primary font-bold">${item.price}</span>
                </div>
                <p style={{ fontSize: '0.9rem', flex: 1 }}>{item.description}</p>
                <button
                    onClick={() => addToCart(item)}
                    className="btn btn-outline"
                    style={{ width: '100%' }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default MenuCard;

import React, { useEffect, useState } from 'react';
import api from '../api';
import MenuCard from '../components/MenuCard';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState('All');

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await api.get('/menu');
                setMenuItems(response.data);
            } catch (err) {
                setError('Failed to load menu');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchMenu();
    }, []);

    const categories = ['All', ...new Set(menuItems.map(item => item.category))];
    const filteredItems = category === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === category);

    if (loading) return <div className="container p-4 text-center">Loading menu...</div>;
    if (error) return <div className="container p-4 text-center text-accent">{error}</div>;

    return (
        <div className="container" style={{ padding: '2rem 20px' }}>
            <h1 className="text-center">Our <span className="text-accent">Menu</span></h1>

            <div className="flex justify-center gap-4 mb-4" style={{ flexWrap: 'wrap', margin: '2rem 0' }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`btn ${category === cat ? 'btn-primary' : 'btn-outline'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 grid-cols-2 grid-cols-3 gap-8">
                {filteredItems.map(item => (
                    <MenuCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Menu;

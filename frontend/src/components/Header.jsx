import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const Header = ({ onOpenCart }) => {
    const { count } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleCartClick = () => {
        onOpenCart();
        setIsMobileMenuOpen(false); // Close menu when opening cart
    };

    return (
        <header>
            <div className="container header-inner">
                {/* Logo */}
                <a href="#" className="logo">
                    <div className="logo-icon">R</div>
                    <span>RannaGhor</span>
                </a>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <a href="#home" className="nav-link active">Home</a>
                    <a href="#menu" className="nav-link">Menu</a>
                    <a href="#about" className="nav-link">Our Story</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>

                {/* Desktop Actions */}
                <div className="desktop-actions">
                    <button onClick={onOpenCart} className="btn-cart">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        {count > 0 && <span className="cart-badge">{count}</span>}
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                    <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </button>

                {/* Mobile Menu Dropdown */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <nav className="mobile-nav">
                        <a href="#home" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                        <a href="#menu" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
                        <a href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Our Story</a>
                        <a href="#contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>

                        <div className="mobile-actions">
                            <button onClick={handleCartClick} className="btn btn-primary w-full flex justify-center gap-2 items-center">
                                <span>View Cart</span>
                                <div style={{ position: 'relative' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                    {count > 0 && <span className="badge" style={{ position: 'absolute', top: -8, right: -8, background: 'white', color: 'var(--primary)' }}>{count}</span>}
                                </div>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;

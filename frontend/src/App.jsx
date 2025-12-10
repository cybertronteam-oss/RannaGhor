import React, { useState, useEffect } from 'react';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import MenuCard from './components/MenuCard';
import api from './api';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/menu')
      .then(res => setMenuItems(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  const filteredItems = category === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === category);

  return (
    <CartProvider>
      <div className="app">
        <Header onOpenCart={() => setIsCartOpen(true)} />
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

        <main>
          {/* Hero Section */}
          <section id="home" style={{ padding: '6rem 0' }}>
            <div className="container grid grid-cols-2 gap-8 items-center" style={{ minHeight: '600px' }}>

              {/* Text */}
              <div className="flex flex-col gap-4">
                <span className="text-primary font-bold uppercase" style={{ letterSpacing: '2px', fontSize: '0.9rem' }}>
                  Hungry?
                </span>
                <h1 style={{ lineHeight: '1.1' }}>
                  Wait Less. <br /> Eat More.
                </h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '1rem', maxWidth: '450px' }}>
                  Handcrafted meals made with fresh ingredients, delivered straight to your door.
                </p>

                <div className="flex gap-4 flex-col-mobile">
                  <a href="#menu" className="btn btn-primary">Order Now</a>
                  <a href="#about" className="btn btn-outline">Our Story</a>
                </div>

                <div className="flex gap-8 mt-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div>
                    <h3 className="mb-0" style={{ fontSize: '1.5rem' }}>30m</h3>
                    <p className="text-muted text-sm mb-0">Delivery</p>
                  </div>
                  <div>
                    <h3 className="mb-0" style={{ fontSize: '1.5rem' }}>4.9/5</h3>
                    <p className="text-muted text-sm mb-0">Rating</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div style={{ position: 'relative' }}>
                <img
                  src="/images/biryani.png"
                  alt="Delicious Biryani"
                  style={{ borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', width: '100%', objectFit: 'cover', height: '500px' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '-30px',
                  background: 'white',
                  padding: '1rem 1.5rem',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '2rem' }}>🔥</span>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Hot & Spicy</h4>
                    <span className="text-primary font-bold text-sm">Best Seller</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Menu Section */}
          <section id="menu" style={{ padding: '6rem 0', background: '#F8FAFC' }}>
            <div className="container">
              <div className="flex justify-between items-end mb-12 flex-col-mobile gap-4">
                <div>
                  <h2 style={{ marginBottom: '0.5rem' }}>Our Popular Menu</h2>
                  <p className="mb-0">Select your favorite category</p>
                </div>
                <div className="flex gap-2" style={{ overflowX: 'auto', maxWidth: '100%', paddingBottom: '5px' }}>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className="btn"
                      style={{
                        height: '40px',
                        padding: '0 20px',
                        background: category === cat ? 'var(--text-main)' : 'white',
                        color: category === cat ? 'white' : 'var(--text-muted)',
                        border: '1px solid var(--border)',
                        borderRadius: '30px'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {loading ? (
                <div className="text-center py-12 text-muted">Loading delicious items...</div>
              ) : (
                <div className="grid grid-cols-3 gap-8">
                  {filteredItems.map(item => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* About Section */}
          <section id="about" style={{ padding: '6rem 0' }}>
            <div className="container grid grid-cols-2 gap-12 items-center">
              <img
                src="/images/salad.png"
                alt="Fresh Salad Ingredients"
                style={{ borderRadius: '32px', boxShadow: 'var(--shadow-lg)' }}
              />
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">About Us</span>
                <h2 className="mt-2 mb-4">We believe in <br /> Fresh & Healthy</h2>
                <p className="text-muted text-lg mb-6">
                  RannaGhor serves food that honors the ingredients. We source strictly from local farmers and organic producers to ensure every bite is packed with nutrition and flavor.
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-3">
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                    No Artificial Preservatives
                  </li>
                  <li className="flex items-center gap-3">
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                    Farm-to-Table Guarantee
                  </li>
                  <li className="flex items-center gap-3">
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                    Express Hygiene Standards
                  </li>
                </ul>
                <a href="#contact" className="btn btn-outline mt-8">Contact Us</a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" style={{ padding: '6rem 0', background: 'white', borderTop: '1px solid var(--border)' }}>
            <div className="container grid grid-cols-2 gap-12 items-start">
              {/* Info */}
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Get in Touch</span>
                <h2 className="mb-4">Contact Us</h2>
                <p className="text-muted mb-8">
                  Have a question about our menu or want to make a reservation?
                  Fill out the form and we will get back to you instantly.
                </p>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="btn-icon">📍</div>
                    <div>
                      <h4 className="mb-1" style={{ fontSize: '1rem' }}>Visit Us</h4>
                      <p className="text-muted text-sm">123 Flavor Street, Foodie City, FC 90210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="btn-icon">📞</div>
                    <div>
                      <h4 className="mb-1" style={{ fontSize: '1rem' }}>Call Us</h4>
                      <p className="text-muted text-sm">+880 1234 567 890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="btn-icon">✉️</div>
                    <div>
                      <h4 className="mb-1" style={{ fontSize: '1rem' }}>Email Us</h4>
                      <p className="text-muted text-sm">hello@ranna.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="card p-8" style={{ padding: '2.5rem', boxShadow: 'var(--shadow-lg)', border: 'none', background: '#F8FAFC' }}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-sm font-bold mb-2 block text-muted">Name</label>
                      <input type="text" placeholder="John Doe" style={{ background: 'white' }} />
                    </div>
                    <div>
                      <label className="text-sm font-bold mb-2 block text-muted">Email</label>
                      <input type="email" placeholder="john@example.com" style={{ background: 'white' }} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="text-sm font-bold mb-2 block text-muted">Subject</label>
                    <input type="text" placeholder="Inquiry" style={{ background: 'white' }} />
                  </div>
                  <div className="mb-6">
                    <label className="text-sm font-bold mb-2 block text-muted">Message</label>
                    <textarea rows="4" placeholder="How can we help you?" style={{ background: 'white' }}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-full">Send Message</button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;

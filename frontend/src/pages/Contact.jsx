import React from 'react';

const Contact = () => {
    return (
        <div className="container" style={{ padding: '4rem 20px', maxWidth: '800px' }}>
            <h1 className="text-center mb-4">Contact <span className="text-accent">Us</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card p-4">
                    <h3>Get in Touch</h3>
                    <p className="mb-4 text-secondary">
                        Have questions or feedback? We'd love to hear from you.
                    </p>
                    <ul style={{ lineHeight: '2' }}>
                        <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                        <li><strong>Email:</strong> hello@rannaghor.com</li>
                        <li><strong>Address:</strong> 123 Flavor Street, Foodie City</li>
                    </ul>
                </div>

                <div className="card p-4">
                    <h3>Opening Hours</h3>
                    <ul style={{ lineHeight: '2' }}>
                        <li className="flex justify-between"><span>Mon - Fri</span> <span>10:00 AM - 10:00 PM</span></li>
                        <li className="flex justify-between"><span>Sat - Sun</span> <span>11:00 AM - 11:00 PM</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;

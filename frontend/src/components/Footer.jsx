import React from 'react';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid var(--border)', background: 'white', padding: '3rem 0' }}>
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>R</div>
                        <span style={{ fontSize: '1.25rem', fontWeight: '800' }}>RannaGhor</span>
                    </div>

                    <div className="text-muted text-sm">
                        &copy; {new Date().getFullYear()} RannaGhor. All rights reserved.
                    </div>

                    <div className="flex gap-4">
                        {['Facebook', 'Instagram', 'Twitter'].map(social => (
                            <a key={social} href="#" className="text-muted hover:text-primary transition-colors text-sm font-semibold">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

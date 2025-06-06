import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <header className="header">
                <div className="container">
                    <h1>Property Management System</h1>
                    <p>Efficiently manage your properties</p>
                </div>
            </header>

            <main className="main-content">
                <div className="container">
                    <section className="welcome-section">
                        <h2>Welcome to the Property Management System</h2>
                        <p>
                            This system helps you manage your properties, tenants, and maintenance requests
                            in one centralized platform.
                        </p>
                    </section>

                    <section className="features-section">
                        <h2>Key Features</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <h3>Property Management</h3>
                                <p>Track and manage all your properties in one place</p>
                            </div>

                            <div className="feature-card">
                                <h3>Tenant Management</h3>
                                <p>Manage tenant information, leases, and communications</p>
                            </div>

                            <div className="feature-card">
                                <h3>Maintenance Requests</h3>
                                <p>Track and resolve maintenance issues efficiently</p>
                            </div>

                            <div className="feature-card">
                                <h3>Financial Tracking</h3>
                                <p>Monitor rent payments, expenses, and generate reports</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2025 Property Management System. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Your one-stop shop for all things awesome!</p>
      </header>
      
      <section className="actions">
        <h2>What would you like to do?</h2>
        <div className="action-buttons">
          <Link to="/product/new" className="button">Add New Product</Link>
          <Link to="/customer/new" className="button">Add New Customer</Link>
          <Link to="/order/new" className="button">Place New Order</Link>
        </div>
      </section>

      <section className="features">
        <h2>Featured Products</h2>
        {/* */}
        <p>Check out our latest products and deals!</p>
      </section>

      <footer>
        <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
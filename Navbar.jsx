import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar">
      <h1>My Store</h1>
      <Link to="/">Home</Link>
      <Link to="/cart" className="cart-icon">
        🛒 <span className="cart-count">{cartItems.length}</span>
      </Link>
    </nav>
  );
};

export default Navbar;

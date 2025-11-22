import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../App';
import './Header.css';

const Header = () => {
  const { getCartItemCount } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>🛍️ ShopHub</h1>
        </Link>
        <nav>
          <Link to="/" className="nav-link">
            Products
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            <span>Cart</span>
            {getCartItemCount() > 0 && (
              <span className="cart-badge">{getCartItemCount()}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


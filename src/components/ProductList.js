import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      description: 'Premium wireless headphones with noise cancellation',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      description: 'Feature-rich smartwatch with health tracking',
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
      description: 'Ergonomic aluminum laptop stand',
    },
    {
      id: 4,
      name: 'Mechanical Keyboard',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500',
      description: 'RGB mechanical keyboard with cherry switches',
    },
    {
      id: 5,
      name: 'Wireless Mouse',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
      description: 'Ergonomic wireless mouse with precision tracking',
    },
    {
      id: 6,
      name: 'USB-C Hub',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500',
      description: 'Multi-port USB-C hub with HDMI support',
    },
    {
      id: 7,
      name: 'Monitor Stand',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
      description: 'Adjustable monitor stand with cable management',
    },
    {
      id: 8,
      name: 'Desk Lamp',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
      description: 'LED desk lamp with adjustable brightness',
    },
  ]);

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>Our Products</h2>
        <p>Discover amazing products at great prices</p>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;


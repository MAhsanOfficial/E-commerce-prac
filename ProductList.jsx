import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Men Shirt', price: 30, category: 'men' },
    { id: 2, name: 'Women Dress', price: 50, category: 'women' },
    { id: 3, name: 'Kid T-Shirt', price: 20, category: 'kids' },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
          <button onClick={() => addToCart(product)}>Buy</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

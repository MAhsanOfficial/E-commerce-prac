import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [size, setSize] = useState('');
  
  // Example product (You can fetch this from API or a data file)
  const product = {
    id: id,
    name: 'Product Name',
    description: 'Detailed description of the product.',
    price: 40,
  };

  const handleAddToCart = () => {
    if (!size) {
      alert('Please select a size.');
      return;
    }
    addToCart({ ...product, size });
  };

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      <label htmlFor="size">Choose Size:</label>
      <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
        <option value="">Select size</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
      </select>

      <button onClick={handleAddToCart}>Buy</button>
    </div>
  );
};

export default ProductDetail;

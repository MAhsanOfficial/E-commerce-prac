// import React from 'react'

// const Cart = () => {
//   return (
//     <div>
//       <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo soluta. In provident maxime accusamus perspiciatis asperiores necessitatibus officia cum velit corrupti veniam eligendi esse,</h1>
//     </div>
//   )
// }

// export default Cart








import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} - Size: {item.size}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;


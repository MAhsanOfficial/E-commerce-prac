import React from 'react'

const Card = (props) => {
  const { image, description, price, strikethrough } = props
  return (
    <div>
      <div  style={
        {
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }
      }>
        <div style={{width:"250px", height:"350px", backgroundImage: `url(${image})`, backgroundPosition:"center", backgroundSize:"cover", backgroundColor:"black"}} ></div>
        <span>{description}</span>
        <div style={
          {
            display: "flex",
            flexDirection: "row",
            gap:"1rem"
          }
        }><span>{price}</span>
        <pre style={{ textDecorationLine: "line-through", color: "grey" }}>{strikethrough}</pre>
        </div>
      </div>
    </div>
  )
}

export default Card




// import React from 'react';

// const Cart = ({ cartItems, removeFromCart }) => {
//   return (
//     <div className="cart-page">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>
//               {item.name} - ${item.price} - Size: {item.size}
//               <button onClick={() => removeFromCart(item.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;


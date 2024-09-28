// import React from 'react'
// import Header from './Components/Header'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { routes } from './Routes'
// import Cart from './Screens/Cart'
// import Shop from './Screens/Shop'
// import ShopItems from './Screens/ShopItems'
// import Footer from './Components/Footer'

// const App = () => {
//   return (
//     <div>

//       <BrowserRouter>
//         <Header />
//         <Routes>
//           {routes.map(({ path, screen }, index) => (
//             <Route key={index} path={path} element={screen} />
//           ))}
//           <Route path='/cart' element={<Cart />} />
//           <Route path='*' element={"Page Not Found"} />
//           <Route path='/' element={<Shop/>}>
//             <Route path='shopitems' element={<ShopItems/>}/>
//           </Route>
//         </Routes>
//         <Footer/>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App








import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './Screens/Cart';
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;

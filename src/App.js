// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Whole Wheat Bread', description: 'Healthy and delicious.', price: 3.99 },
    { id: 2, name: 'Blandito Bread', description: 'Blandito and delicious.', price: 4.99 },
    // Add more products
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div>
      <Header />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;

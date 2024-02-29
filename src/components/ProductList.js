// ProductList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductDetail from './ProductDetail'; // Make sure to import ProductDetail component

const ProductList = ({ products, addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => showProductDetail(product)}>Details</button>
            <button onClick={() => closeProductDetail(product)}>Close</button>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <ProductDetail product={selectedProduct} addToCart={addToCart} />
      )}
    </div>
  );
};

export default ProductList;

// ProductComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from './actions';

const ProductComponent = ({ product, increaseQuantity, decreaseQuantity }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={() => increaseQuantity(product.id)}>Increase Quantity</button>
      <button onClick={() => decreaseQuantity(product.id)}>Decrease Quantity</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const product = state.products.find(p => p.id === ownProps.productId);
  return {
    product
  };
};

export default connect(mapStateToProps, { increaseQuantity, decreaseQuantity })(ProductComponent);

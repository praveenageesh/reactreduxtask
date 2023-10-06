// actions.js
export const increaseQuantity = (productId) => {
    return {
      type: 'INCREASE_QUANTITY',
      payload: productId
    };
  };
  
  export const decreaseQuantity = (productId) => {
    return {
      type: 'DECREASE_QUANTITY',
      payload: productId
    };
  };
  
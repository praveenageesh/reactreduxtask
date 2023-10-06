// reducers.js
const initialState = {
    products: [...], // Your product data goes here
    cart: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREASE_QUANTITY':
        // Handle increasing quantity logic
        return updatedState;
      case 'DECREASE_QUANTITY':
        // Handle decreasing quantity logic
        return updatedState;
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
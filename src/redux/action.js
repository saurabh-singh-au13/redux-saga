import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./type";

export const addToCart = (data) => {
  console.log("Action Called", data);
  return {
    type: ADD_TO_CART,
    data: data,
    //     type: REMOVE_TO_CART,
    //     data:data
  };
};

export const removeFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const clearCart = (data) => {
    return{
        type: CLEAR_CART,
        data:data
    }
}

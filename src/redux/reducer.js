import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./type";

export const cartData = (data = [], action) => {
//   if (action.type === ADD_TO_CART) {
//     console.log("reducer called", action);
//     return action.data;
//   } else {
//     return "no action found";
//   }
    switch (action.type) {
        case ADD_TO_CART:
            console.log("action called", action)
            return [action.data, ...data];
            
        case REMOVE_FROM_CART:
            console.log("REMOVE CONDITION CALLED", action)
            data.length = data.length ? data.length - 1 : []
            return [...data] ;

        case CLEAR_CART :
            data.length = 0
            return [...data]
    
        default:
            return data;
    }


};

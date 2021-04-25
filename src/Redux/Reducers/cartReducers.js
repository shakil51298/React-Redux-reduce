// reducer allways take two parameters (stare , action)

import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/CartAction";

const initialState = {
    cart: [],
    products: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        // second actions
        case ADD_TO_CART:
            const newId = action.id;
            const newCart = [...state, newId];
            return {
                cart: newCart
            }
        // first actions
        case REMOVE_FROM_CART:
            const id = action.id;
            const filter = state.cart.filter(item => item.id !== id)
            return {
                cart: filter
            }
        default:
            return state;
    }
}
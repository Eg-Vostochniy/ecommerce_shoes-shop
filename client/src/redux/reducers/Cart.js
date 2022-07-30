import { ADD_NEW_PRODUCT } from '../types/Cart'

export const cart = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return { ...state, cartItems: [action.payload, ...state.cartItems] }

    default:
      return state
  }
}

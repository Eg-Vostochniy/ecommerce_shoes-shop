import {
  ADD_NEW_PRODUCT,
  CHANGE_CART_ITEM_QTY,
  REMOVE_CART_ITEM,
} from '../types/Cart'

export const cart = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
        cartLength: state.cartLength + 1,
      }
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
        cartLength: state.cartLength - 1,
      }
    case CHANGE_CART_ITEM_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item._id === action.payload.id)
            return { ...item, selectedQuantity: action.payload.qty }
          return item
        }),
      }

    default:
      return state
  }
}

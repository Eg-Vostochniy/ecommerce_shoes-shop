import { SET_PRODUCT_DETAILS, SET_PRODUCT_LIST } from '../types/Products'

export const product = (
  state = { products: [], productDetails: {} },
  action
) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return { ...state, products: action.payload }
    case SET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload }

    default:
      return state
  }
}

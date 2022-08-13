import { ALERT } from '../types/Alert'
import {
  ADD_NEW_PRODUCT,
  CHANGE_CART_ITEM_QTY,
  REMOVE_CART_ITEM,
} from '../types/Cart'

export const addNewCartProduct = (product) => async (dispatch) => {
  try {
    const storageCart = JSON.parse(localStorage.getItem('cartItems'))
    if (storageCart) {
      const cartWithNewProduct = [product, ...storageCart]
      localStorage.setItem('cartItems', JSON.stringify(cartWithNewProduct))
    } else {
      localStorage.setItem('cartItems', JSON.stringify([product]))
    }
    dispatch({ type: ALERT, payload: { success: 'Product added to cart' } })
    dispatch({ type: ADD_NEW_PRODUCT, payload: product })
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: { error: error.response.data.msg || error.message },
    })
  }
}

export const removeCartItem = (id) => (dispatch) => {
  try {
    dispatch({ type: REMOVE_CART_ITEM, payload: id })

    const cartLS = JSON.parse(localStorage.getItem('cartItems'))
    const filteredCart = cartLS.filter((cartItem) => cartItem._id !== id)

    if (cartLS.length > 1) {
      localStorage.setItem('cartItems', JSON.stringify(filteredCart))
    } else localStorage.removeItem('cartItems')
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: { error: error.message },
    })
  }
}

export const changeCartItemQty = (qty, id) => (dispatch, getState) => {
  try {
    dispatch({ type: CHANGE_CART_ITEM_QTY, payload: { qty, id } })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: { error: error.message },
    })
  }
}

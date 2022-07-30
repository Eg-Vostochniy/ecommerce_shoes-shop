import { ALERT } from '../types/Alert'
import { ADD_NEW_PRODUCT } from '../types/Cart'

export const addNewCartProduct = (product) => async (dispatch) => {
  try {
    const storageCart = await localStorage.getItem('cartItems')
    localStorage.setItem(
      'cartItems',
      storageCart !== null
        ? storageCart + ',' + JSON.stringify(product)
        : JSON.stringify(product)
    )
    dispatch({ type: ADD_NEW_PRODUCT, payload: product })
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: { error: error.response.data.msg || error.message },
    })
  }
}

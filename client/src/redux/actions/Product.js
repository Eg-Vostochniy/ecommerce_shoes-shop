import axios from 'axios'
import { ALERT } from '../types/Alert'
import { SET_PRODUCT_DETAILS, SET_PRODUCT_LIST } from '../types/Products'

export const listProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } })

    const { data } = await axios.get('/api/get_products')
    dispatch({ type: SET_PRODUCT_LIST, payload: data })

    dispatch({ type: ALERT, payload: { loading: false } })
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: { error: error.response.data.msg || error.message },
    })
  }
}

export const productDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } })

    const { data } = await axios.get(`/api/get_products/${id}`)
    dispatch({ type: SET_PRODUCT_DETAILS, payload: data })

    dispatch({ type: ALERT, payload: { loading: false } })
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: { error: error.response.data.msg || error.message },
    })
  }
}

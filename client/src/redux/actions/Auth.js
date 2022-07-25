import axios from 'axios'
import { ALERT } from '../types/Alert'
import { AUTH } from '../types/Auth'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/login', { email, password }, config)
    dispatch({ type: AUTH, payload: data })

    dispatch({ type: ALERT, payload: { loading: false } })

    localStorage.setItem('auth', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: { error: error.response.data.msg || error.message },
    })
  }
}

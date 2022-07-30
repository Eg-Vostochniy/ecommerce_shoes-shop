import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { alert } from './reducers/Alert'
import { product } from './reducers/Product'
import { auth } from './reducers/Auth'
import { cart } from './reducers/Cart'
import { strParser } from '../utils/strParser'

const reducers = combineReducers({
  alert,
  product,
  auth,
  cart,
})

const middleware = [thunk]

const cartItemsFromLS = localStorage.getItem('cartItems')
  ? strParser(localStorage.getItem('cartItems')).obj
  : []

const authInfoFromLS = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : null

const initialState = {
  cart: { cartItems: cartItemsFromLS },
  auth: authInfoFromLS,
}

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

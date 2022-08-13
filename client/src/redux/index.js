import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { alert } from './reducers/Alert'
import { product } from './reducers/Product'
import { auth } from './reducers/Auth'
import { cart } from './reducers/Cart'

const reducers = combineReducers({
  alert,
  product,
  auth,
  cart,
})

const middleware = [thunk]

const cartItemsFromLS = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const authInfoFromLS = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : null

const initialState = {
  cart: {
    cartItems: cartItemsFromLS,
    cartLength: cartItemsFromLS.length,
  },
  auth: authInfoFromLS,
}

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

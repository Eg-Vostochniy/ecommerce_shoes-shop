import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { alert } from './reducers/Alert'
import { product } from './reducers/Product'
import { auth } from './reducers/Auth'

const reducers = combineReducers({
  alert,
  product,
  auth,
})

const middleware = [thunk]

const cartItemsFromLS = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const authInfoFromLS = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : null

const initialState = {
  cartItems: cartItemsFromLS,
  authUser: authInfoFromLS,
}

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

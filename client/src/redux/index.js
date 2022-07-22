import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { alert } from './reducers/Alert'
import { product } from './reducers/Product'

const reducers = combineReducers({
  alert,
  product,
})

const middleware = [thunk]

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
)

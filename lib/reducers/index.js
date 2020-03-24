import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import userData from './userData'

export default combineReducers({
  userData,
  productsReducer
})

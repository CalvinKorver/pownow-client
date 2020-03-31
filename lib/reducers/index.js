import { combineReducers } from 'redux'
import service from './service'
import userData from './userData'

export default combineReducers({
  userData,
  service
})

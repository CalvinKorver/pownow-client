import { combineReducers } from 'redux'
import phone from './phone'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter,
  phone,
})

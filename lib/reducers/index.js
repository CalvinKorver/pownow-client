import { combineReducers } from 'redux'
import device from './device'
import service from './service'
import userData from './userData'
import weather from './weather'

export default combineReducers({
  userData,
  service,
  device,
  weather
})

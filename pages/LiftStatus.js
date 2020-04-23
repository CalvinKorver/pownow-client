import { connect, useDispatch } from 'react-redux'

import LiftStatusContainer from '../containers/LiftStatusContainer'
import { addWeatherData } from '../lib/actions'
import fetch from 'node-fetch'

const LiftStatus = (props) => {
  return(
    <LiftStatusContainer />
  )
}


export default connect(state => state)(LiftStatus)
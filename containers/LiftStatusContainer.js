import LiftStatusComponent from '../components/LiftStatusComponent';
import { addWeatherData } from '../lib/actions';
import { connect } from 'react-redux';

// Transform redux store state into props you want to pass through
const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}

const mapDispatchToProps = dispatch => ({
    addWeatherData: weather => dispatch(addWeatherData(weather))
})

export default connect(mapStateToProps, mapDispatchToProps)(LiftStatusComponent);
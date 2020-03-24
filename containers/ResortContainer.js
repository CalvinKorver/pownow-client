import { addDate, addLocation } from '../lib/actions';

import React from 'react';
import ResortComponent from '../components/ResortComponent';
import { connect } from 'react-redux';

// Transform redux store state into props you want to pass through
const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

const mapDispatchToProps = dispatch => ({
    addDate: date => dispatch(addDate(date)),
    addLocation: location => dispatch(addLocation(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResortComponent);
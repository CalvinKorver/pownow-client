import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, startService } from '../lib/actions'

import ConfirmComponent from '../components/ConfirmComponent';
import React from 'react';
import ReduxThunk from 'redux-thunk'; // no changes here 😀
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    startService: data => dispatch(startService(data))
})

// Transform redux store state into props you want to pass through
const mapStateToProps = (state) => {
    return {
        userData: state.userData,
        service: state.service
        // pending: state.service.pending
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmComponent)
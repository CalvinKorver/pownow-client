import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, postUsers } from '../lib/actions'

import ConfirmComponent from '../components/ConfirmComponent';
import React from 'react';
import ReduxThunk from 'redux-thunk'; // no changes here 😀
import { connect } from 'react-redux';

const fetchProducts = (userData, dispatch) => {
    // return (dispatch) => {
    //     console.log('in fetchProducts')
    //     dispatch(FETCH_PRODUCTS_PENDING);
    // }

    return function(dispatch) {
        return postUsers(userData)
    }
}


const mapDispatchToProps = dispatch => ({
    // postLifts: data => fetchProducts(data, dispatch)
    postLifts: data => dispatch(fetchProducts(data))
})

// Transform redux store state into props you want to pass through
const mapStateToProps = (state) => {
    return {
        userData: state.userData,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmComponent)
import ConfirmContainer from '../../containers/ConfirmContainer'
import React from 'react';
import { connect } from 'react-redux';

const Confirm = () => {
    return(
        <ConfirmContainer/>
    )
}

export default connect(state => state)(Confirm);
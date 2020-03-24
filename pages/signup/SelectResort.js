import React from 'react';
import ResortContainer from '../../containers/ResortContainer'
import { connect } from 'react-redux';

const SelectResort = (props) => {
    return (
        <ResortContainer/>
    )
}

export default connect(state => state)(SelectResort);
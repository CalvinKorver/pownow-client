import LiftsComponent from '../components/LiftsComponent';
import React from 'react';
import { addLifts } from '../lib/actions'
import { connect } from 'react-redux'

const LiftsContainer = (props) => {
    const submitForm = (formValues) => {
        console.log(formValues)
    }
    return(
        <LiftsComponent
        onSubmit={submitForm}
        />
    )
}

const mapStateToProps = state => ({
    lifts: state.lifts
  })
  
  const mapDispatchToProps = dispatch => ({
    addLifts: lifts => dispatch(addLifts(lifts))
  })


export default connect(mapStateToProps, mapDispatchToProps)(LiftsComponent)
import LiftsComponent from '../components/LiftsComponent';
import React from 'react';
import { addLifts } from '../lib/actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    lifts: state.userData.lifts
  })
  
  const mapDispatchToProps = dispatch => ({
    addLifts: lifts => dispatch(addLifts(lifts))
  })


export default connect(mapStateToProps, mapDispatchToProps)(LiftsComponent)
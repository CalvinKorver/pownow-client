import LiftsContainer from '../../containers/LiftsContainer'
import React from 'react';
import { connect } from 'react-redux';

const Lifts = () => {
    return (
        <LiftsContainer />
    )
}

Lifts.getInitialProps = async ({ res, store }) => {
    if (!store.getState().userData.phone) {
        res.writeHead(301, {
            Location: '/'
        });
        res.end()
    } else if (!store.getState().userData.location) {
        res.writeHead(301, {
            Location: '/pages/selectresort'
        })
    }
    return {}
}

export default connect(state => state)(Lifts)

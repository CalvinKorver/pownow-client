import { DEFAULT_VARIANTS } from '../../lib';
import React from 'react';
import ResortContainer from '../../containers/ResortContainer'
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

const SelectResort = (props) => {
    return (
        <ResortContainer />
    )
}

SelectResort.getInitialProps = async ({ res, store }) => {
    if (!store.getState().userData.phone) {
        res.writeHead(301, {
            Location: '/'
        });
        res.end()
    }
    return {}
}

export default connect(state => state)(SelectResort);
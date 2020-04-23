import '../.semantic/dist/semantic.min.css';

import { Provider, useDispatch } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import MobileDetect from "mobile-detect";
import React from 'react';
import Reducer from '../lib/reducers'
import { getWidthFactory } from '../lib'
import thunk from 'redux-thunk';
import withRedux from 'next-redux-wrapper'

const makeStore = (initialState, options) => {
  return createStore(Reducer, initialState, applyMiddleware(thunk));
};

const MyApp = (props) => {
  const { Component, pageProps, store, router } = props;

  return (
    <Provider store={store} >
      <Layout {...pageProps}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} getWidth={getWidthFactory(props.isMobileFromSSR)}/>
        </AnimatePresence>
      </Layout>
    </Provider>
  );
}

export default withRedux(makeStore)(MyApp);

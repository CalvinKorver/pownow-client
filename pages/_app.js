import '../.semantic/dist/semantic.min.css';

import App, { Container } from 'next/app';
import { Provider, useDispatch } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import { Message } from 'semantic-ui-react';
import React from 'react';
import Reducer from '../lib/reducers'
import thunk from 'redux-thunk';
import withRedux from 'next-redux-wrapper'

const makeStore = (initialState, options) => {
  return createStore(Reducer, initialState, applyMiddleware(thunk));
};
const MyApp = (props) => {
  const { Component, pageProps, store, router } = props;

  return (
    <Provider store={store} >
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Provider>
  );
}

export default withRedux(makeStore)(MyApp);

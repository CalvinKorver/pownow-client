import '../.semantic/dist/semantic.min.css';

import App, { Container } from 'next/app';
import { applyMiddleware, createStore } from 'redux'

import { Provider } from 'react-redux'
import React from 'react';
import Reducer from '../lib/reducers'
import thunk from 'redux-thunk';
import withRedux from 'next-redux-wrapper'

const makeStore = (initialState, options) => {
  return createStore(Reducer, initialState, applyMiddleware(thunk));
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // ctx.store.dispatch({
    //   type: 'ADD_PHONE', phone: '2049323'
    // })

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps }
  }
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store = {store}>
          <Component {...pageProps} />
      </Provider>
    );
  }
}

export default  withRedux(makeStore)(MyApp);

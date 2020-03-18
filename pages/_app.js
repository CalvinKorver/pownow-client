import React from 'react';
import App, { Container } from 'next/app';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import '../.semantic/dist/semantic.min.css';
import Reducer from '../lib/reducers'

const makeStore = (initialState, options) => {
  return createStore(Reducer, initialState);
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
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    );
  }
}

export default  withRedux(makeStore)(MyApp);

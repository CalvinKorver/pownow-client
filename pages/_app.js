import '../.semantic/dist/semantic.min.css';

import { Provider, useDispatch } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import MobileDetect from "mobile-detect";
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
      <Layout getWidth={getWidthFactory(props.isMobileFromSSR)}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} getWidth={getWidthFactory(props.isMobileFromSSR)}/>
        </AnimatePresence>
      </Layout>
    </Provider>
  );
}

export async function getServerSideProps(ctx) {
  const req = ctx.req
  if (req) {
      const md = new MobileDetect(req.headers["user-agent"]);
      const isMobileFromSSR = !!md.mobile();

      return {
          props: {
              isMobileFromSSR,
              deviceInfo: {
                  mobile: md.mobile(),
                  tablet: md.tablet(),
                  os: md.os(),
                  userAgent: md.userAgent()
              }
          }
      }
  }
  return null
}

export const getWidthFactory = isMobileFromSSR => () => {
  const isSSR = typeof window === "undefined";
  const ssrValue = isMobileFromSSR
      ? Responsive.onlyMobile.maxWidth
      : Responsive.onlyTablet.minWidth;

  return isSSR ? ssrValue : window.innerWidth;
};


export default withRedux(makeStore)(MyApp);

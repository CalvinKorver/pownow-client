import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import Start from './signup/Start';
import Layout from '../components/Layout';

// import { Provider } from "react-redux";
// import store from "./js/store/index";

const Home = () => (
    // <Provider store={store}>
      <Layout>
        <Start/>
      </Layout>
    // </Provider>
);
export default Home;

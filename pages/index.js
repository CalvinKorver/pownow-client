import Layout from '../components/Layout';
import { createStore } from 'redux';
import rootReducer from '../lib/reducers';

import FunctionStart from './signup/FunctionStart';

const store = createStore(rootReducer)

export const Home = () => {
  return(
      <Layout>
        <FunctionStart/>
      </Layout>
    )
  }

export default Home
import FunctionStart from './signup/FunctionStart';
import Layout from '../components/Layout';
import { createStore } from 'redux';
import rootReducer from '../lib/reducers';

const store = createStore(rootReducer)

export const Home = () => {
  return(
      <Layout>
        <FunctionStart/>
      </Layout>
    )
  }

export default Home
import Layout from '../components/Layout';
import FunctionStart from './signup/FunctionStart';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from '../lib/reducers';

const store = createStore(rootReducer)

export const Home = () => {
  return(
    // <Provider store={store}>
    //   <Layout>
    //     <FunctionStart/>
    //   </Layout>
    // </Provider> 
    <p>hey</p>
    )
  }


import FunctionStart from '../components/FunctionStart';
import HomepageLayout from '../components/HomepageLayout';
import {INDEX_VARIANTS} from '../lib';
import { createStore } from 'redux';
import { motion } from 'framer-motion';
import rootReducer from '../lib/reducers';

const store = createStore(rootReducer)


export const Home = () => {
  return (
    <motion.div initial="exit" animate="enter" exit="exit">
      <motion.div variants={INDEX_VARIANTS}>
        <HomepageLayout>
          <FunctionStart />
        </HomepageLayout>
      </motion.div>
    </motion.div>
  )
}

export default Home

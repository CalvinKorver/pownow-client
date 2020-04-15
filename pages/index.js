import { DEFAULT_VARIANTS, INDEX_VARIANTS } from '../lib';

import FunctionStart from '../components/FunctionStart';
import HomepageLayout from '../components/HomepageLayout';
import { createStore } from 'redux';
import { motion } from 'framer-motion';
import rootReducer from '../lib/reducers';

const store = createStore(rootReducer)


export const Home = () => {
  return (
    <HomepageLayout >
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={DEFAULT_VARIANTS}>
          <FunctionStart />
        </motion.div>
      </motion.div>
    </HomepageLayout>
  )
}

export default Home

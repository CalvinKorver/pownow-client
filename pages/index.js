import {DEFAULT_VARIANTS} from '../lib';
import FunctionStart from './signup/FunctionStart';
import HomepageLayout from '../components/HomepageLayout';
import { createStore } from 'redux';
import { motion } from 'framer-motion';
import rootReducer from '../lib/reducers';

const store = createStore(rootReducer)

const functionVariants=DEFAULT_VARIANTS

export const Home = () => {
  return (
    <motion.div initial="exit" animate="enter" exit="exit">
      <motion.div variants={functionVariants}>
        <HomepageLayout>
          <FunctionStart />
        </HomepageLayout>
      </motion.div>
    </motion.div>
  )
}

export default Home
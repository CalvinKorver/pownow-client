import { DEFAULT_VARIANTS, INDEX_VARIANTS } from '../lib';

import { BackgroundDiv } from '../style/style';
import FunctionStart from '../components/FunctionStart';
import HomepageLayout from '../components/HomepageLayout';
import { createStore } from 'redux';
import { motion } from 'framer-motion';
import rootReducer from '../lib/reducers';

const store = createStore(rootReducer)


export const Home = () => {
  return (
      <motion.div initial="exit" animate="enter" exit="exit" >
        <motion.div variants={DEFAULT_VARIANTS}>
          <HomepageLayout >
            <FunctionStart />
          </HomepageLayout>
        </motion.div>
      </motion.div>

  )
}

export default Home

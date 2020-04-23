import { Dimmer, Grid, Image, List, Loader, Segment, Table } from 'semantic-ui-react'

import { DEFAULT_VARIANTS } from '../lib/index'
import LiftTable from './LiftTable'
import fetch from '../lib/fetch'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import useSWR from 'swr'

export const LiftStatus = (props) => {
  const initialData = props.data
  const URL = 'https://pd111o85d7.execute-api.us-east-1.amazonaws.com/dev/lifts'
  
  const { data: lifts, error } = useSWR(URL, fetch, { initialData })
  const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=39.20&lon=-120.23&appid=78e3c12b33c8e029b2de8020dc6478d0'
    const { data: weather, weatherError } = useSWR(weatherURL, fetch, { initialData })
    // weather ? props.addWeatherData(weather) : null
    // console.log(weather)
    // temp = weather

  const loader = (
    <Segment>
      <Dimmer active inverted>
        <Loader active size='small'>Loading</Loader>
      </Dimmer>
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  )

  if (error) {
    return (<LiftStatusGrid>
      <div>failed</div>
    </LiftStatusGrid>)

  } else if (!lifts) {
    return (
      <LiftStatusGrid>
        {loader}
      </LiftStatusGrid>
    )
  } else {
    return (
      <LiftStatusGrid>
        <LiftTable lifts={JSON.parse(lifts.body)} weather={weather} />
      </LiftStatusGrid>

    )
  }
}

const LiftStatusGrid = ({ children }) => (
  <motion.div initial="exit" animate="enter" exit="exit">
    <motion.div variants={DEFAULT_VARIANTS}>
      <Grid centered columns={2} style={{paddingLeft:  '15px'}}>
          <Grid.Column computer={8} mobile={16}>
            {children}
          </Grid.Column>
      </Grid>
    </motion.div>
  </motion.div>
)


export default LiftStatus
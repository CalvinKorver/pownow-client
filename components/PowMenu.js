import { Grid, Image, Menu } from 'semantic-ui-react'
import React, { useState } from 'react'
import { StyledMenu, StyledMenuItem } from '../style/style'

import Link from 'next/link';
import Weather from './Weather';
import { useRouter } from 'next/router'

const PowMenu = (props) => {
  const [activeItem, setActiveItem] = useState('home');

  const router = useRouter()

  const handleItemClick = (e, { name, value }) => {
    setActiveItem(name)
    value ? router.push(value) : null
  }

  return (
    <Grid>
      <Grid.Column width={1} />
      <Grid.Column width={14}>
        <StyledMenu secondary>
          <Menu.Item header 
            name='/'
            value='/'
            onClick={handleItemClick}
             >
            <Image style={{ width: '175px' }} src="/pow-logo.png" alt="" />
          </Menu.Item>
          <Menu.Menu position='right'>
            <StyledMenuItem
              name='How it Works'
              value='/What'
              active={activeItem === 'How it Works'}
              onClick={handleItemClick} />
            <StyledMenuItem
              name='Current Lift Status'
              active={activeItem === 'status'}
              onClick={handleItemClick}
              value="/LiftStatus" />
          </Menu.Menu>
        </StyledMenu>
      </Grid.Column>
      <Grid.Column width={1} />
    </Grid>
  )
}

export default PowMenu
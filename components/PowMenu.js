import { Grid, Image, Menu, Responsive } from 'semantic-ui-react'
import React, { useState } from 'react'
import { StyledMenu, StyledMenuItem } from '../style/style'

import Link from 'next/link';
import Weather from './Weather';
import { useRouter } from 'next/router'

const PowMenu = (props, {getWidth}) => {
  const [activeItem, setActiveItem] = useState('home');
  const router = useRouter()

  const handleItemClick = (e, { name, value }) => {
    setActiveItem(name)
    props.handleMenuChange({ name, value })
    value ? router.push(value) : null

  }

  return (
    <Responsive
      fireOnMount
      getWidth={getWidth}
      minWidth={Responsive.onlyTablet.minWidth}>
      <Grid>
        <Grid.Column width={1} className='computer only' />
        <Grid.Column computer={14} mobile={16} tablet={16}>
          <StyledMenu secondary style={{ width: '100%' }}>
            <Menu.Item header
              name='/'
              value='/'
              onClick={handleItemClick}>
              <Image style={{ maxWidth: '175px' }} src="/pow-logo.png" alt="" />
            </Menu.Item>
            <Menu.Menu position='right'>
              <StyledMenuItem
                name='How'
                value='/What'
                active={activeItem === 'How it Works'}
                onClick={handleItemClick} />
              <StyledMenuItem
                name='Lift Status'
                active={activeItem === 'status'}
                onClick={handleItemClick}
                value="/LiftStatus" />
            </Menu.Menu>
          </StyledMenu>
        </Grid.Column>
        <Grid.Column width={1} className='computer only' />
      </Grid>
    </Responsive>
  )
}

export default PowMenu
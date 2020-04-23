import { Grid, Image, Menu, Responsive } from 'semantic-ui-react'
import { MobileStyledMenu, StyledMenuItem } from '../style/style'
import React, { useState } from 'react'

import Link from 'next/link';
import Weather from './Weather';
import { useRouter } from 'next/router'

const MobileMenu = (props, { getWidth }) => {
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
      maxWidth={Responsive.onlyMobile.maxWidth}>
      <MobileStyledMenu secondary>
        <Menu.Item header
          name='/'
          value='/'
          onClick={handleItemClick}>
          <Image style={{ maxWidth: '130px' }} src="/pow-logo.png" alt="" />
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
      </MobileStyledMenu>
    </Responsive>
  )
}

export default MobileMenu
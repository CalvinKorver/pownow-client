import { Image, Menu } from 'semantic-ui-react'
import React, { useState } from 'react'
import { RightMenu, StyledMenu } from '../style/style'

import Link from 'next/link';
import Weather from './Weather';
import { useRouter } from 'next/router'

const PowMenu = (props) => {
  const [activeItem, setActiveItem] = useState('home');

  const router = useRouter()

  const handleItemClick = (e, { name, value }) => {
    setActiveItem(name)
    value? router.push(value) : null
  }

  return (
    <StyledMenu secondary>
      <Menu.Item
        name='How it Works'
        value = '/What'
        active={activeItem === 'How it Works'}
        onClick={handleItemClick}
      />
      {/* <Menu.Item
        name='...'
        active={activeItem === '...'}
        onClick={handleItemClick}
      /> */}
      <Menu.Item>
        {/* <Weather/> */}
      </Menu.Item>
        <Menu.Item 
          style={{ margin: '0 auto' }}
          onClick={handleItemClick}
          // active={activeItem === 'home'}
          value='/'>
          <Image style={{ width: '100px' }} src="/pow-logo.png" alt="" />
        </Menu.Item>
      <RightMenu >
        <Menu.Item
          name='Current Lift Status'
          active={activeItem === 'status'}
          onClick={handleItemClick}
          value="/LiftStatus"
        />
        {/* <Menu.Item
          name='Signup'
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        /> */}
      </RightMenu>
    </StyledMenu>
  )
}

export default PowMenu
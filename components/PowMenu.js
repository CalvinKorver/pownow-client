import { Image, Menu } from 'semantic-ui-react'
import React, { useState } from 'react'
import { RightMenu, StyledMenu } from '../style/style'

import Link from 'next/link';
import { useRouter } from 'next/router'

const PowMenu = () => {
  const [activeItem, setActiveItem] = useState('home');

  const router = useRouter()

  const handleItemClick = (e, { name, value }) => {
    setActiveItem(name)
    router.push(value)
  }

  return (
    <StyledMenu secondary>
      <Menu.Item
        name='How it Works'
        value = '/what'
        active={activeItem === 'How it Works'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='...'
        active={activeItem === '...'}
        onClick={handleItemClick}
      />
      <Link href="/">
        <Menu.Item style={{ margin: '0 auto' }}>
          <Image style={{ width: '100px' }} src="/pow-logo.png" alt="" />
        </Menu.Item>
      </Link>
      <RightMenu >
        <Menu.Item
          name='Log In'
          active={activeItem === 'logout'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Signup'
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        />
      </RightMenu>
    </StyledMenu>
  )
}

export default PowMenu
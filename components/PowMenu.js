import { Image, Menu } from 'semantic-ui-react'
import React, { Component } from 'react'
import { RightMenu, StyledMenu } from '../style/style'

import Link from 'next/link';

export default class PowMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <StyledMenu secondary>
        <Menu.Item
          name='How it Works'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='...'
          active={activeItem === '...'}
          onClick={this.handleItemClick}
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
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Signup'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </RightMenu>
      </StyledMenu>
    )
  }
}
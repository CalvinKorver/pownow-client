import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
  {
    key: 'squaw',
    text: 'Squaw Valley',
    value: 'squaw',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
]

const ResortDropdown = () => (
  <Dropdown
    placeholder='Select Resort'
    fluid
    selection
    options={friendOptions}
  />
)

export default ResortDropdown
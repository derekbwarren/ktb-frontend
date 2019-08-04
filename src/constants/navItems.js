import React from 'react'
import { Home, Person, PersonAdd } from '@material-ui/icons'

const navItems = [
  {
    text: 'Home',
    icon: <Home />,
    link: '/'
  },
  {
    text: 'View Managers',
    icon: <Person />,
    link: '/managers'
  },
  {
    text: 'Add New Manager',
    icon: <PersonAdd />,
    link: '/managers/new'
  }
]

export default navItems
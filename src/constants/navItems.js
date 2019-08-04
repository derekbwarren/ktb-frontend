import React from 'react'
import { Home, Person, PersonAdd } from '@material-ui/icons'

const navItems = [
  {
    text: 'Home',
    icon: <Home />,
    link: '/',
    display: false,
  },
  {
    text: 'View Managers',
    icon: <Person />,
    link: '/managers',
    display: true,
  },
  {
    text: 'Add New Manager',
    icon: <PersonAdd />,
    link: '/managers/new',
    display: true,
  },
]

export default navItems

/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  AppBar,
  CssBaseline,
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import {
  makeStyles,
  useTheme,
} from '@material-ui/core/styles'
import { ChevronLeft, ChevronRight, Menu as MenuIcon } from '@material-ui/icons'
import clsx from 'clsx'
import { navItems } from '../../constants'

const DRAWER_WIDTH = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

// styles
const Logo = styled(Typography).attrs({
  variant: 'h5',
})`
  @import url('https://fonts.googleapis.com/css?family=Exo:500i&display=swap');
  &&& {
    font-family: 'Exo', sans-serif;
    text-shadow: 1px 2px 4px rgba(0,0,0,0.4);
    padding-right: 4px;

    &.menu {
      margin-left: 32px;
    }
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const SideDrawer = ({
  children,
  history,
  location,
}) => {
  const pathname = new URLSearchParams(location).get('pathname')
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="secondary"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{
          background: 'linear-gradient(to right, #2D323E 0%, #3C4252 100%)',
          backgroundSize: 'cover',
          backgroundColor: '#2D323E',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          {
            !open && (
              <StyledLink to="/">
                <Logo>KnowThyBoss</Logo>
              </StyledLink>
            )
          }
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <StyledLink to="/">
            <Logo>KnowThyBoss</Logo>
          </StyledLink>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            navItems.map(item => (
              item.display && (
                <ListItem
                  button
                  key={item.text}
                  selected={pathname === item.link}
                  onClick={() => history.push(item.link)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              )
            ))
          }
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

SideDrawer.propTypes = {
  children: PropTypes.object.isRequired,
  history: PropTypes.object,
  location: PropTypes.object,
}

SideDrawer.defaultProps = {
  history: null,
  location: null,
}

export default withRouter(SideDrawer)

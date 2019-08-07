/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  AppBar,
  Button,
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

const DRAWER_WIDTH = 280

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
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
  visibility: {
    visibility: 'hidden',
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: '#303030',
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    backgroundColor: '#1389e4',
    backgroundImage: 'url(/assets/images/crystals_bg.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
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
    backgroundColor: '#1389e4',
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
  loginButton: {
    color: 'rgba(0, 0, 0, 0.87)',
  },
  list: {
    backgroundColor: '#1389e4',
    color: '#fff',
  },
}))

// styles
const Logo = styled(Typography).attrs({
  variant: 'h5',
})`
  @import url('https://fonts.googleapis.com/css?family=Exo:500i&display=swap');
  &&& {
    font-family: 'Exo', sans-serif;
    text-shadow: 1px 2px 4px rgba(0,0,0,0.2);
    padding-right: 4px;
    color: '#000';

    &.menu {
      margin-left: 32px;
    }
  }
`
const StyledLink = styled(Link)`
  &&& {
    text-decoration: none;
    color: ${({ open }) => (open ? '#fff' : '#000')};
    &.app-bar {
      visibility: ${({ open }) => (open ? 'hidden' : 'visible')};
    }
  }
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

  const handleDrawerToggle = () => {
    setOpen(!open)
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
          backgroundSize: 'cover',
          backgroundColor: '#fff',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.visibility]: open,

            })}
          >
            <MenuIcon />
          </IconButton>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            margin: '0 56px',
          }}
          >
            <StyledLink
              to="/"
              open={open}
              className="app-bar"
            >
              <Logo>KnowThyBoss</Logo>
            </StyledLink>
            <Button color="inherit" className={classes.loginButton}>Login</Button>
          </div>
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
        <div className={classes.toolbar} style={{ backgroundColor: '#1f7acc', paddingBottom: '32px' }}>
          <IconButton onClick={handleDrawerToggle} style={{ color: '#fff' }}>
            {open ? <ChevronLeft /> : <MenuIcon />}
          </IconButton>
        </div>
        <div style={{
          textAlign: 'center',
          backgroundColor: '#1389e4',
        }}
        >
          <Logo style={{
            backgroundColor: '#1389e4',
            padding: '16px 0',
            width: '210px',
            margin: '-32px auto 0 auto',
            color: 'white',
            borderRadius: '4px',
            visibility: open ? '' : 'hidden',
          }}
          >
            <StyledLink to="/" open={open}>
              KnowThyBoss
            </StyledLink>
          </Logo>
        </div>
        <List className={classes.list}>
          {
            navItems.map(item => (
              item.display && (
                <ListItem
                  button
                  key={item.text}
                  selected={pathname === item.link}
                  onClick={() => history.push(item.link)}
                >
                  <ListItemIcon style={{ color: '#fff' }}>{item.icon}</ListItemIcon>
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

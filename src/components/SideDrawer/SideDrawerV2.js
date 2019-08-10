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
  Hidden,
} from '@material-ui/core'
import {
  makeStyles,
  useTheme,
} from '@material-ui/core/styles'
import {
  ChevronLeft, ChevronRight, Menu as MenuIcon, Inbox, Mail,
} from '@material-ui/icons'
import clsx from 'clsx'
import { navItems } from '../../constants'

const DRAWER_WIDTH = 280

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
    backgroundColor: '#1389e4',
  },
  appBar: {
    marginLeft: DRAWER_WIDTH,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
    },
    // boxShadow: 'none',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)',
    // borderBottom: '0.5px solid #F4F4F4',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  loginButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: DRAWER_WIDTH,
    backgroundColor: '#1389e4',
    backgroundImage: `url(${process.env.REACT_APP_BASENAME}assets/images/crystals_bg.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
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
      /* visibility: ${({ open }) => (open ? 'hidden' : 'visible')}; */
    }
  }
`

const SideDrawerV2 = ({
  children,
  history,
  location,
  ...props
}) => {
  const pathname = new URLSearchParams(location).get('pathname')
  const { container } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} style={{ backgroundColor: '#207acc' }} />
      {/* <Divider /> */}
      <div style={{
        textAlign: 'center',
        backgroundColor: '#1389e4',
        width: '210px',
        borderRadius: '4px',
        margin: '0 auto',
      }}
      >
        <Logo style={{
          backgroundColor: '#1389e4',
          padding: '16px 0',
          // width: '210px',
          margin: '-32px auto 0 auto',
          color: 'white',
          borderRadius: '4px',
          // visibility: mobileOpen ? '' : 'hidden',
        }}
        >
          <StyledLink to="/" open>
              KnowThyBoss
          </StyledLink>
        </Logo>
      </div>
      <List>
        {
          navItems.map(item => (
            item.display && (
              <ListItem
                button
                key={item.text}
                selected={pathname === item.link}
                onClick={() => {
                  history.push(item.link); if (mobileOpen) { handleDrawerToggle() }
                }}
              >
                <ListItemIcon style={{ color: '#fff' }}>{item.icon}</ListItemIcon>
                <ListItemText style={{ color: '#fff' }} primary={item.text} />
              </ListItem>
            )
          ))
        }
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ backgroundColor: '#fff' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon color="primary" />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title} style={{ visibility: 'hidden' }}>
            Responsive drawer
          </Typography>
          <Button color="primary">Login</Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          {/* mobile drawer */}
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

SideDrawerV2.propTypes = {
  children: PropTypes.object.isRequired,
  history: PropTypes.object,
  location: PropTypes.object,
}

SideDrawerV2.defaultProps = {
  history: null,
  location: null,
}

export default withRouter(SideDrawerV2)

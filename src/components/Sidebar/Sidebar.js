import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import * as Icon from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // height: '100vh',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Sidebar = ({
  ...props
}) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  }
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon><Icon.Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon><Icon.PersonAdd /></ListItemIcon>
          <ListItemText primary="Add New Manager" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemIcon><Icon.Person /></ListItemIcon>
          <ListItemText primary="View Managers" />
        </ListItem>
      </List>
    </div>
  )
}

export default Sidebar
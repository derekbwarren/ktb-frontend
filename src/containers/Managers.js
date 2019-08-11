import React, { Component, Fragment, useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Button, Card, CardContent, Typography, TextField, Tooltip, Zoom,
} from '@material-ui/core'
import { NetPromoterScore } from '../components'
// import { SkipNext, SkipPrevious, PlayArrow } from '@material-ui/icons'
import { managers as mockManagers } from '../mocks'
import firebase from '../firebase'

function useManagers() {
  const [managers, setManagers] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('managers')
      .onSnapshot((snapshot) => {
        const newManagers = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setManagers(newManagers);
      })

      return () => unsubscribe()
  }, [])

  return managers;
}


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginLeft: '4em',
    marginRight: '4em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      marginRight: '0',
    },
  },
  textField: {
    marginTop: '0',
    marginBottom: '24px',
    marginLeft: '4em',
    marginRight: theme.spacing(1),
    width: 260,
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
  },
  card: {
    display: 'flex',
    marginBottom: '16px',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  content: {
    flex: '1 0 auto',
    [theme.breakpoints.down('sm')]: {
      padding: '16px 16px 0 16px',
    },
  },
  cover: {
    width: 151,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {

    },
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      // flexDirection: 'row',
      // alignItems: 'center',
    },
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  worldClass: {
    color: 'green',
  },
  excellent: {
    color: 'lightgreen',
  },
  good: {
    color: 'blue',
  },
  bad: {
    color: 'red',
  },
  default: {
    color: 'inherit',
  },
}))

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip)


const ManagerList = () => {
  const classes = useStyles()
  // const theme = useTheme()
  const managers = useManagers();

  const [filterText, setFilter] = useState('')
  const [isLoading, setLoading] = useState(true)

  const getRatingClass = (rating) => {
    if (rating > 75) { return 'worldClass' }
    if (rating > 50) { return 'excellent' }
    if (rating > 0) { return 'good' }
    if (rating < 0) { return 'bad' }
    return 'default'
  }
  const handleFilter = () => {
    // eslint-disable-next-line max-len
    // setManagers(managers.filter(manager => manager.firstName.includes(filterText) || manager.lastName.includes(filterText)))
  }

  return (
    <Fragment>
      <TextField
        id="filter-managers"
        label="Filter Managers"
        type="search"
        className={classes.textField}
        value={filterText}
        onChange={(e) => { setFilter(e.target.value); handleFilter() }}
      />
      <div className={classes.container}>
        {
        managers.map((manager) => {
          const {
            id, firstName, lastName, company, level, organization, rating,
          } = manager
          return (
            <Card className={classes.card} key={`${lastName}-${id}`}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {firstName}
                    {' '}
                    {lastName}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {company}
                    {' '}
                    &mdash;
                    {' '}
                    {level}
                    {', '}
                    {organization}
                  </Typography>
                </CardContent>
                <CardContent>
                  <LightTooltip TransitionComponent={Zoom} title={<NetPromoterScore />} placement="left" interactive>
                    <div className={classes.ratingContainer}>
                      <Typography component="h5" variant="h5" className={classes[getRatingClass(rating)]}>
                        {rating}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                      Rating
                      </Typography>
                    </div>
                  </LightTooltip>
                </CardContent>
              </div>
            </Card>
          )
        })
      }
      </div>
    </Fragment>
  )
}

export default ManagerList;

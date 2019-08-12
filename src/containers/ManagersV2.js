import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Button, Card, CardContent, Typography, TextField, Tooltip, Zoom, CardActions, Chip,
} from '@material-ui/core'
import { NetPromoterScore, RateManagerModal } from '../components'
// import { SkipNext, SkipPrevious, PlayArrow } from '@material-ui/icons'
import firebase from '../firebase'

const SORT_OPTIONS = {
  TIME_ASC: { column: 'time_seconds', direction: 'asc' },
  TIME_DESC: { column: 'time_seconds', direction: 'desc' },

  NAME_ASC: { column: 'firstName', direction: 'asc' },
  NAME_DESC: { column: 'firstName', direciton: 'desc' },

  NPS_ASC: { column: 'nps.nps', direction: 'asc' },
  NPS_DESC: { column: 'nps.nps', direction: 'desc' },
}
function useManagers(sortBy = 'NAME_ASC') {
  const [managers, setManagers] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('managers')
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newManagers = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setManagers(newManagers)
      })

    return () => unsubscribe()
  }, [sortBy])

  return managers
}


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    // flexDirection: 'column',
    flexWrap: 'wrap',
    marginLeft: '4em',
    marginRight: '4em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      marginRight: '0',
    },
  },
  buttonContainer: {
    margin: '0 auto',
    flexDirection: 'row',
    textAlign: 'center',
    padding: '1em',
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
    minWidth: 275,
    maxWidth: 275,
    margin: '0 16px 16px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      // flexDirection: 'row',
      // alignItems: 'center',
    },
    '&:hover': {
      cursor: 'default',
    },
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

// eslint-disable-next-line max-len
const hasUserAlreadyRated = (manager, user) => !!(manager.nps && manager.nps.raters && manager.nps.raters.includes(user.uid))

const ManagersV2 = ({ user, handleLoginToggle, location }) => {
  const { state } = location
  const newManagerId = state && state.newManagerId
  const isLoggedIn = user !== null
  const classes = useStyles()
  const [modalOpen, setModalOpen] = useState(false)
  const [currentManager, setCurrentManager] = useState({})

  const [sortBy, setSortBy] = useState('NAME_ASC')
  const managers = useManagers(sortBy)

  const getRatingClass = (rating) => {
    if (rating > 75) { return 'worldClass' }
    if (rating > 50) { return 'excellent' }
    if (rating > 0) { return 'good' }
    if (rating < 0) { return 'bad' }
    return 'default'
  }

  const getRatingText = (rating) => {
    if (rating > 75) { return 'World Class' }
    if (rating > 50) { return ' Excellent' }
    if (rating > 0) { return 'Good' }
    if (rating === 0) { return 'Needs Improvement' }
    if (rating < 0) { return 'Avoid' }
    return ''
  }
  const handleFilter = () => {
    // eslint-disable-next-line max-len
    // setManagers(managers.filter(manager => manager.firstName.includes(filterText) || manager.lastName.includes(filterText)))
  }
  const handleModelClose = () => {
    setModalOpen(false)
  }

  const handleBestManagers = () => {
    setSortBy('NPS_ASC')
  }

  const handleWorstManagers = () => {
    setSortBy('NPS_DESC')
  }

  const handleAllManagers = () => {
    setSortBy('NAME_ASC')
  }

  return (
    <Fragment>
      <div className={classes.buttonContainer}>
        <Button
          id="ascending-manager-name"
          onClick={handleAllManagers}
        >
          All Managers
        </Button>
        <Button
          id="ascending-managers-nps"
          onClick={handleWorstManagers}
          color="primary"
        >
            Recommended
        </Button>
        <Button
          id="descending-managers-nps"
          onClick={handleBestManagers}
          color="secondary"
        >
            Not Recommended
        </Button>
      </div>
      {/* <TextField
        id="filter-managers"
        label="Filter Managers"
        type="search"
        className={classes.textField}
        value={filterText}
        onChange={(e) => { setFilter(e.target.value); handleFilter() }}
      /> */}
      <div className={classes.container}>
        {
        managers.map((manager) => {
          const {
            id, firstName, lastName, company, level, organization, nps,
          } = manager
          return (
            <Card className={`${classes.card} ${newManagerId === id ? 'new-manager-pulse' : ''}`} key={`${lastName}-${id}`}>
              <CardContent className={classes.cardContent}>
                <div>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {company}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {firstName}
                    {' '}
                    {lastName}
                  </Typography>
                  <div className={classes.pos}>
                    <Typography color="textSecondary">
                      {level}
                      {' '}
                    &mdash;
                      {' '}
                      {organization}
                    </Typography>
                  </div>
                </div>
                <LightTooltip TransitionComponent={Zoom} title={<NetPromoterScore />} placement="top" interactive>
                  <div className={classes.ratingContainer}>
                    <Typography component="h5" variant="h5">
                      {
                        nps.respondents > 0
                          ? `${nps.nps}`
                          : <Typography component="span" color="textSecondary">Not Yet Rated</Typography>
                        }
                    </Typography>
                    <Chip variant="outlined" size="small" label={getRatingText(nps.nps)} className={classes[getRatingClass(nps.nps)]} />
                  </div>
                </LightTooltip>
              </CardContent>
              <CardActions>
                {!(user && hasUserAlreadyRated(manager, user))
                  ? (
                    <Button
                      size="small"
                      onClick={() => {
                        if (!isLoggedIn) {
                          handleLoginToggle()
                        } else {
                          setCurrentManager(manager); setModalOpen(true)
                        }
                      }}
                    >
                      {'Rate Manager'}
                    </Button>
                  )
                  : <Typography variant="subtitle1" color="textSecondary">Thank you for rating this manager!</Typography>
                }
              </CardActions>
            </Card>
          )
        })
      }
      </div>
      <RateManagerModal
        open={modalOpen}
        handleClose={handleModelClose}
        data={currentManager}
        user={user}
      />
    </Fragment>
  )
}

ManagersV2.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object,
  handleLoginToggle: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object,
}

ManagersV2.defaultProps = {
  user: null,
  handleLoginToggle: null,
  location: null,
}

export default ManagersV2

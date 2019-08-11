import React, { Fragment, useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Button, Card, CardContent, Typography, TextField, Tooltip, Zoom, CardActions,
} from '@material-ui/core'
import { NetPromoterScore, RateManagerModal } from '../components'
// import { SkipNext, SkipPrevious, PlayArrow } from '@material-ui/icons'
import { managers as mockManagers } from '../mocks'


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
    flexDirection: 'column',
    width: 'max-content',
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

const ManagersV2 = () => {
  const classes = useStyles()
  // const theme = useTheme()
  const [managers, setManagers] = useState([])
  const [filterText, setFilter] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [currentManager, setCurrentManager] = useState({})

  useEffect(() => {
    setManagers(mockManagers)
  }, [])

  const getRatingClass = (rating) => {
    if (rating > 75) { return 'worldClass' }
    if (rating > 50) { return 'excellent' }
    if (rating > 0) { return 'good' }
    if (rating < 0) { return 'bad' }
    return 'default'
  }
  const handleFilter = () => {
    // eslint-disable-next-line max-len
    setManagers(managers.filter(manager => manager.firstName.includes(filterText) || manager.lastName.includes(filterText)))
  }
  const handleModelClose = () => {
    setModalOpen(false)
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
                    <Typography component="h5" variant="h5" className={classes[getRatingClass(rating)]}>
                      {rating}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Rating
                    </Typography>
                  </div>
                </LightTooltip>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => { setCurrentManager(manager); setModalOpen(true) }}>Rate Manager</Button>
              </CardActions>
            </Card>
          )
        })
      }
      </div>
      <RateManagerModal open={modalOpen} handleClose={handleModelClose} data={currentManager} />
    </Fragment>
  )
}

export default ManagersV2

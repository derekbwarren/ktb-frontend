import React, { Fragment, useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Button, Card, CardContent, Typography, TextField, Tooltip, Zoom,
} from '@material-ui/core'
import { NetPromoterScore } from '../components'
// import { SkipNext, SkipPrevious, PlayArrow } from '@material-ui/icons'
import { managers as mockManagers } from '../mocks'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginLeft: '4em',
    marginRight: '4em',
  },
  textField: {
    marginTop: '0',
    marginBottom: '24px',
    marginLeft: '4em',
    marginRight: theme.spacing(1),
    width: 260,
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
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
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

const Managers = () => {
  const classes = useStyles()
  // const theme = useTheme()
  const [managers, setManagers] = useState([])
  const [filterText, setFilter] = useState('')

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
    setManagers(managers.filter(manager => manager.firstName.includes(filterText) || manager.lastName.includes(filterText)))
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
        // margin="normal"
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
                    <div>
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

export default Managers

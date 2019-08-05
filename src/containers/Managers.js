import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card, CardContent, Typography,
} from '@material-ui/core'
// import { SkipNext, SkipPrevious, PlayArrow } from '@material-ui/icons'
import { managers as mockManagers } from '../mocks'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
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

const Managers = () => {
  const classes = useStyles()
  // const theme = useTheme()
  const [managers, setManagers] = useState([])

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

  return (
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
                  <Typography component="h5" variant="h5" className={classes[getRatingClass(rating)]}>
                    {rating}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    NPS Rating
                  </Typography>
                </CardContent>
              </div>
            </Card>
          )
        })

      }
    </div>
  )
}

export default Managers

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, Slider, Typography,
} from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import updateNps from '../../Utils/updateNps'
import firebase from '../../firebase'


const useStyles = makeStyles(theme => ({
  labels: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slider: {
    paddingTop: '48px',
    color: 'rgb(32, 122, 204)',
    marginBottom: 0,
  },
  secondaryText: {
    fontSize: '14px',
  },
  actions: {
    marginTop: '24px',
    padding: '16px 24px',
  },
  submit: {
    backgroundColor: 'rgb(32, 122, 204)',
  },
}))

const marks = [...Array(11).keys()].map(key => ({ value: key, label: `${key}` }))

const RateManagerModal = ({ handleClose, open, data }) => {
  const classes = useStyles()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const {
    id, firstName, lastName, company, level, organization, nps,
  } = data
  const [manager, setNewManager] = useState(data)
  const [npsState, setNpsState] = useState(nps)
  const [likelyHood, setLikelyhood] = useState('')
  const valuetext = value => `${value}`

  const handleChange = field => (e, value) => {
    console.log(e)
    // const { value } = e.target
    console.log('value', value)
    setLikelyhood(value)
  }

  function updateFB() {
    console.log(`somethign${likelyHood}`)
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {firstName}
        {' '}
        {lastName}
        <Typography className={classes.secondaryText} color="textSecondary">
          {company}
          {' '}
          &mdash;
          {' '}
          {level}
          {', '}
          {organization}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {'How likely is it that you would recommend this manager to a friend or colleague?'}
        </DialogContentText>
        <Slider
          className={classes.slider}
          defaultValue={5}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          onChangeCommitted={handleChange()}
          step={1}
          marks={marks}
          min={0}
          max={10}
        />
        <div className={classes.labels}>
          <span>Very Unlikely</span>
          <span>Very Likely</span>
        </div>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button onClick={handleClose} color="default">
            Cancel
        </Button>
        <Button className={classes.submit} onClick={() => { updateFB(); handleClose() }} variant="contained" color="primary" autoFocus>
            Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

RateManagerModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
}

RateManagerModal.defaultProps = {
  data: {},
}

export default RateManagerModal

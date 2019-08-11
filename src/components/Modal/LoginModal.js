import React from 'react'
import PropTypes from 'prop-types'
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, Slider, Typography,
} from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import { GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons'

const useStyles = makeStyles(theme => ({
  labels: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dialog: {
    minWidth: '500px',
  },
  secondaryText: {
    fontSize: '14px',
  },
  actions: {
    // marginTop: '24px',
    padding: '16px 24px',
  },
  submit: {
    backgroundColor: 'rgb(32, 122, 204)',
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
}))


const LoginModal = ({ handleClose, open }) => {
  const classes = useStyles()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle id="responsive-dialog-title">
        {'Login to Your Account'}
      </DialogTitle>
      {/* <DialogContent>
        <DialogContentText>
          {'How likely is it that you would recommend this manager to a friend or colleague?'}
        </DialogContentText>
        <Slider
          className={classes.slider}
          defaultValue={5}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          step={1}
          marks={marks}
          min={0}
          max={10}
        />
        <div className={classes.labels}>
          <span>Very Unlikely</span>
          <span>Very Likely</span>
        </div>
      </DialogContent> */}
      <DialogActions className={classes.actions}>
        <div className={classes.actionContainer}>
          <GoogleLoginButton style={{ fontSize: '16px' }} />
          <GithubLoginButton style={{ fontSize: '16px' }} />
        </div>
      </DialogActions>
    </Dialog>
  )
}

LoginModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
}

LoginModal.defaultProps = {
  data: {},
}

export default LoginModal

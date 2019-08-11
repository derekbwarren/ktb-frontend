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
    padding: '16px 24px 24px 24px',
  },
  submit: {
    backgroundColor: 'rgb(32, 122, 204)',
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    paddingTop: '24px',
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
      <DialogTitle id="responsive-dialog-title" className={classes.title}>
        {'Login to Your Account'}
      </DialogTitle>
      <DialogActions className={classes.actions}>
        <div className={classes.actionContainer}>
          <GoogleLoginButton style={{ fontSize: '16px', margin: '16px 5px' }} />
          <GithubLoginButton style={{ fontSize: '16px' }} />
        </div>
      </DialogActions>
    </Dialog>
  )
}

LoginModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

LoginModal.defaultProps = {
}

export default LoginModal

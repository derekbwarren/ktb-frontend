import React, {useState} from 'react'
// import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button, MenuItem, TextField, Typography,
} from '@material-ui/core'

import firebase from '../firebase';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '60%',
    margin: '0 auto',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  fieldContainer: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  fieldFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  firstName: {
    margin: '16px 8px 8px 8px',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      margin: '16px 8px 8px 8px',
    },
  },
  lastName: {
    margin: '16px 8px 8px 8px',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      margin: 8,
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  margin: {
    margin: theme.spacing(1),
  },
}))
const DEFAULT_VALUES = {
  firstName: '',
  lastName: '',
  company: '',
  level: '',
  organization: '',
}

const NewManager = () => {
  const classes = useStyles()
  const [values, setValues] = React.useState(DEFAULT_VALUES)
  const [successFullyAdded, setSuccessfullyAdded] = useState(false);

  const handleChange = field => (e) => {
    const { value } = e.target
    setValues({ ...values, [field]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    firebase
      .firestore()
      .collection('managers')
      .add(values)
      .then(() => {
        setValues(DEFAULT_VALUES)
        setSuccessfullyAdded(true);
        setTimeout(() => {
          setSuccessfullyAdded(false);
        }, 3000);
      })
  }

  return (
    <div>
      <Typography className={classes.margin} variant="h5" style={{ textAlign: 'center' }}>
        Add New Manager
      </Typography>
      <form className={classes.container} noValidate={false} autoComplete="off" onSubmit={handleSubmit}>
        {successFullyAdded && <span className={classes.fieldFlex}>Successfully Added!</span>}
        <div className={classes.fieldFlex}>
          <TextField
            id="manager-first-name"
            label="First Name"
            className={classes.firstName}
            fullWidth
            margin="normal"
            onChange={handleChange('firstName')}
            value={values.firstName}
            variant="outlined"
            helperText="Required"
            required
          />
          <TextField
            id="manager-last-name"
            label="Last Name"
            className={classes.lastName}
            fullWidth
            margin="normal"
            onChange={handleChange('lastName')}
            value={values.lastName}
            variant="outlined"
            helperText="Required"
            required
          />
        </div>
        <TextField
          id="manager-company"
          select
          fullWidth
          label="Select a Company"
          className={classes.textField}
          value={values.company}
          onChange={handleChange('company')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          style={{ margin: 8 }}
          variant="outlined"
          helperText="Required"
          required
        >
          <MenuItem value="Capital One">
            Capital One
          </MenuItem>
        </TextField>
        <TextField
          id="manager-level"
          label="Level"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          onChange={handleChange('level')}
          value={values.level}
          variant="outlined"
          helperText="Required"
          required
        />
        <TextField
          id="manager-organization"
          label="Line of Business"
          style={{ margin: '8px 8px 16px 8px' }}
          fullWidth
          margin="normal"
          onChange={handleChange('organization')}
          value={values.organization}
          variant="outlined"
          helperText="Required"
          required
        />

        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
          style={{
            margin: 8,
            width: '100%',
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default NewManager

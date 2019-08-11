import React from 'react'
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
  },
  fieldContainer: {
    marginTop: '16px',
    marginBottom: '16px',
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

class CreateManager extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('managers');
    this.state = {
      firstName: '',
      lastName: '',
      company: '',
      level: '',
      organization: '',
      rating: null,
    }
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('write some validation funciton here');

  }


  render() {
    <div>
      <Typography className={classes.margin} variant="h5" style={{ textAlign: 'center' }}>
        Add New Manager
      </Typography>
      <form className={classes.container} noValidate={false} autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="manager-name"
          label="Name"
          style={{ margin: '16px 8px 8px 8px' }}
          fullWidth
          margin="normal"
          onChange={handleChange('name')}
          value={values.name}
          variant="outlined"
          helperText="Required"
          required
        />
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
  }
}

const NewManager = () => {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    name: '',
    company: '',
    level: '',
    organization: '',
  })
  const handleChange = field => (e) => {

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit with values', values)
  }

  return (
    <div></div>
  )
}

export default CreateManager

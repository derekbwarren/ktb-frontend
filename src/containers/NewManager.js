import React, { Fragment } from 'react'
// import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button, MenuItem, TextField, Typography,
} from '@material-ui/core'

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
  slider: {
    paddingTop: '48px',
    color: 'rgb(32, 122, 204)',
    marginBottom: 0,
  },
  lastField: {
    margin: '8px 8px 16px 8px',
  },
}))

const marks = [...Array(11).keys()].reverse().map(key => ({ value: key, label: `${key}` }))

const NewManager = () => {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    company: '',
    level: '',
    organization: '',
    rating: '',
  })
  const handleChange = field => (e) => {
    const { value } = e.target
    setValues({ ...values, [field]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit with values', values)
  }

  return (
    <div>
      <Typography className={classes.margin} variant="h5" style={{ textAlign: 'center' }}>
        Add New Manager
      </Typography>
      <form className={classes.container} noValidate={false} autoComplete="off" onSubmit={handleSubmit}>
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
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          onChange={handleChange('organization')}
          value={values.organization}
          variant="outlined"
          helperText="Required"
          required
        />
        <Typography variant="subtitle1" style={{ margin: '16px 8px' }}>How likely is it that you would recommend this manager to a friend or colleague?</Typography>
        <TextField
          id="manager-rating"
          select
          fullWidth
          label="Manger Rating"
          className={classes.textField}
          value={values.rating}
          onChange={handleChange('rating')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          style={{ margin: '8px 8px 16px 8px' }}
          variant="outlined"
          helperText="Optional"
          required={false}
        >

          {
            marks.map(mark => (
              <MenuItem value={mark.value} key={mark.label}>
                {mark.label}
                {
                  mark.label === '10'
                    ? (
                      <Fragment>
                        {' '}
                        &mdash; Very Likely
                      </Fragment>
                    )
                    : null
                }
                {
                  mark.label === '0'
                    ? (
                      <Fragment>
                        {' '}
                        &mdash; Very Unlikely
                      </Fragment>
                    )
                    : null
                }
              </MenuItem>
            ))
          }
        </TextField>

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

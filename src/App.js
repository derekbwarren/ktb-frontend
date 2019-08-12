/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { ManagerList, NewManager, ManagersV2 } from './containers'
import { SideDrawerV2, LoginModal } from './components'
import firebase, { auth, provider } from './firebase/Firebase'

require('dotenv').config()


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loginOpen: false,
      user: null,
    }

    this.handleLoginToggle = this.handleLoginToggle.bind(this)
    this.handleLoginWithGoogle = this.handleLoginWithGoogle.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
    })
  }

  handleLoginToggle() {
    const { loginOpen } = this.state
    this.setState({
      loginOpen: !loginOpen,
    })
  }

  handleLoginWithGoogle() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const { user } = result
        this.setState({
          user,
          loginOpen: false,
        })
      })
  }

  handleLogout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null,
        })
      })
  }

  // handleChange(e) {

  // }

  render() {
    const { location } = this.props
    const { loginOpen } = this.state
    return (
      <Fragment>
        <SideDrawerV2
          {...this.props}
          {...this.state}
          handleLoginToggle={this.handleLoginToggle}
          handleLogout={this.handleLogout}
        >
          <Switch location={location}>
            <Route
              exact
              path="/"
              render={() => (
                // <Home {...props} />
                <Redirect push to="/managers" />
              )}
            />
            <Route
              exact
              path="/managers"
              render={props => (
                // <ManagerList {...props} />
                <ManagersV2 {...props} {...this.state} handleLoginToggle={this.handleLoginToggle} />
              )}
            />
            <Route
              exact
              path="/managers/new"
              render={props => (
                <NewManager {...props} {...this.state} />
              )}
            />
          </Switch>
        </SideDrawerV2>
        <LoginModal
          open={loginOpen}
          handleClose={this.handleLoginToggle}
          handleGoogleLogin={this.handleLoginWithGoogle}
        />
      </Fragment>
    )
  }
}

export default App

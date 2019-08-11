/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { ManagerList, NewManager, ManagersV2 } from './containers'
import { SideDrawerV2, LoginModal } from './components'

require('dotenv').config()


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loginOpen: false,
      user: null,
    }

    this.handleLoginToggle = this.handleLoginToggle.bind(this)
  }

  handleLoginToggle() {
    const { loginOpen } = this.state
    this.setState({
      loginOpen: !loginOpen,
    })
  }

  render() {
    const { location } = this.props
    const { loginOpen } = this.state
    return (
      <Fragment>
        <SideDrawerV2 {...this.props} {...this.state} handleLoginToggle={this.handleLoginToggle}>
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
                <ManagersV2 {...props} />
              )}
            />
            <Route
              exact
              path="/managers/new"
              render={props => (
                <NewManager {...props} />
              )}
            />
          </Switch>
        </SideDrawerV2>
        <LoginModal open={loginOpen} handleClose={this.handleLoginToggle} />
      </Fragment>
    )
  }
}

export default App

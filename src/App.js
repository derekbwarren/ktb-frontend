/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { Managers, NewManager, ManagersV2 } from './containers'
import { SideDrawer, SideDrawerV2 } from './components'

require('dotenv').config()

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { location } = this.props
    return (
      <Fragment>
        <SideDrawerV2 {...this.props}>
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
      </Fragment>
    )
  }
}

export default App

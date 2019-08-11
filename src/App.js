import React, { Component, Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { ManagerList, NewManager } from './containers'
import { SideDrawer, SideDrawerV2 } from './components'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <SideDrawerV2 {...this.props}>
          <Switch>
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
                <ManagerList {...props} />
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

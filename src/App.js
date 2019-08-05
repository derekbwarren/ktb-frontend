import React, { Component, Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { Managers, NewManager } from './containers'
import { SideDrawer } from './components'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <SideDrawer {...this.props}>
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
                <Managers {...props} />
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
        </SideDrawer>
      </Fragment>
    )
  }
}

export default App

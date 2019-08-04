import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router'

import { Home, Managers, NewManager } from './containers'
import { SideDrawer, Sidebar, Toolbar } from './components'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('props', props)

    this.state = {}
  }

  render() {
    return (
      <Fragment>

        {/* <Sidebar />
        <Toolbar /> */}
        <SideDrawer {...this.props}>
          <Switch>
            <Route exact
              path="/"
              render={props => (
                <Home {...props} />
              )}
            />
            <Route exact
              path="/managers"
              render={props => (
                <Managers {...props} />
              )}
            />
            <Route exact
              path="/managers/new"
              render={props => (
                <NewManager {...props} />
              )}
            />
          </Switch>
        </SideDrawer>
      </Fragment>
    );
  }
}

export default App;

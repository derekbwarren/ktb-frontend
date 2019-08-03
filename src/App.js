import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router'

import { Home } from './containers'
import { SideDrawer, Sidebar, Toolbar } from './components'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Fragment>

        {/* <Sidebar />
        <Toolbar /> */}
        <SideDrawer>
          <Switch>
            <Route exact
              path="/"
              render={props => (
                <Home {...props} />
              )}
            />
          </Switch>
        </SideDrawer>
      </Fragment>
    );
  }
}

export default App;

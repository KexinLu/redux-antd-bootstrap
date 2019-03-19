import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import store, { history } from 'store';
import UserRoleManagementPage from 'components/containers/UserRoleManagementPage';
import Background from 'components/basic/container';
import { createGlobalStyle } from 'styled-components';

createGlobalStyle`
    https://fonts.googleapis.com/css?family=Raleway:100|Yantramanav:100
`;

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <Background>
          <ToastContainer/>
          <ConnectedRouter history={history}>
            <>
              <Switch>
              <Route exact path="/" component={UserRoleManagementPage} />
              </Switch>
            </>
          </ConnectedRouter>
        </Background>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'assets/theme/theme.js';

import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';

import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware /*compose*/ } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route
            path='/admin'
            render={(props) => {
              const user = JSON.parse(localStorage.getItem('profile'));
              return user?.result?._id !== null ? (
                <AdminLayout {...props} />
              ) : (
                <Redirect to={{ pathname: '/login' }} />
              );
            }}
          />
          <Route path='/auth' render={(props) => <AuthLayout {...props} />} />
          <Redirect from='/' to='/admin/index' />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
);

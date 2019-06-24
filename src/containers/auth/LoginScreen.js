import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Login from '../../components/auth/Login';
import UserStore from '../../stores/UserStore';

import { globalError as globalErrorPropType } from '../../prop-types';

export default @inject('stores', 'actions') @observer class LoginScreen extends Component {
  static propTypes = {
    error: globalErrorPropType.isRequired,
  };

  render() {
    const { actions, stores, error } = this.props;
    return (
      <Login
        onSubmit={actions.user.login}
        isSubmitting={stores.user.loginRequest.isExecuting}
        isTokenExpired={stores.user.isTokenExpired}
        isServerLogout={stores.user.logoutReason === stores.user.logoutReasonTypes.SERVER}
        signupRoute={stores.user.signupRoute}
        passwordRoute={stores.user.passwordRoute}
        error={error}
      />
    );
  }
}

LoginScreen.wrappedComponent.propTypes = {
  actions: PropTypes.shape({
    user: PropTypes.shape({
      login: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  stores: PropTypes.shape({
    user: PropTypes.instanceOf(UserStore).isRequired,
  }).isRequired,
};

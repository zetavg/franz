import { shell } from 'electron';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import classnames from 'classnames';

import { oneOrManyChildElements } from '../../prop-types';
import { matchRoute } from '../../helpers/routing-helpers';

// TODO: create container component for this component
export default @inject('stores') @observer class Link extends Component {
  onClick(e) {
    if (this.props.target === '_blank') {
      e.preventDefault();
      shell.openExternal(this.props.to);
    }
  }

  render() {
    const {
      children,
      stores,
      to,
      className,
      activeClassName,
      strictFilter,
    } = this.props;
    const { router } = stores;

    let filter = `${to}(*action)`;
    if (strictFilter) {
      filter = `${to}`;
    }

    const match = matchRoute(filter, router.location.pathname);

    const linkClasses = classnames({
      [`${className}`]: true,
      [`${activeClassName}`]: match,
    });

    return (
      <a
        href={router.history.createHref(to)}
        className={linkClasses}
        onClick={e => this.onClick(e)}
      >
        {children}
      </a>
    );
  }
}

Link.wrappedComponent.propTypes = {
  stores: PropTypes.shape({
    router: PropTypes.instanceOf(RouterStore).isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    oneOrManyChildElements,
    PropTypes.string,
  ]).isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  strictFilter: PropTypes.bool,
  target: PropTypes.string,
};

Link.wrappedComponent.defaultProps = {
  className: '',
  activeClassName: '',
  strictFilter: false,
  target: '',
};

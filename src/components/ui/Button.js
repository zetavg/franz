import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Loader from 'react-loader';
import classnames from 'classnames';

export default @observer class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
    buttonType: PropTypes.string,
    loaded: PropTypes.bool,
    htmlForm: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    disabled: false,
    onClick: () => {},
    type: 'button',
    buttonType: '',
    loaded: true,
    htmlForm: '',
  };

  element = null;

  render() {
    const {
      label,
      className,
      disabled,
      onClick,
      type,
      buttonType,
      loaded,
      htmlForm,
    } = this.props;

    const buttonProps = {
      className: classnames({
        'franz-form__button': true,
        [`franz-form__button--${buttonType}`]: buttonType,
        [`${className}`]: className,
      }),
      type,
    };

    if (disabled) {
      buttonProps.disabled = true;
    }

    if (onClick) {
      buttonProps.onClick = onClick;
    }

    if (htmlForm) {
      buttonProps.form = htmlForm;
    }

    return (
      // disabling rule as button has type defined in `buttonProps`
      /* eslint-disable react/button-has-type */
      <button {...buttonProps}>
        <Loader
          loaded={loaded}
          lines={10}
          scale={0.4}
          color={buttonType !== 'secondary' ? '#FFF' : '#373a3c'}
          component="span"
        />
        {label}
      </button>
      /* eslint-enable react/button-has-type */
    );
  }
}

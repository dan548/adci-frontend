import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class SubmitButton extends React.Component {

  render() {
    const { text, className, disabled } = this.props;

    return (
      <button disabled={disabled} className={`submit-button${className ? ` ${className}` : ''}`} type={'submit'}>{text}</button>
    );
  }

}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool
};
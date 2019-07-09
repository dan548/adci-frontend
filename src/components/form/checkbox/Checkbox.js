import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Checkbox extends React.Component {
  render() {

    const addClassName = this.props.className ? ` ${this.props.className}` : '';

    return (
      <div className={`named-checkbox${addClassName}`}>
        <input type={'checkbox'} className={'checkbox'} checked={this.props.checked} onClick={this.props.onClick}/>
        <label className={'checkbox-label'}>{this.props.text}</label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
  text: '',
  checked: false
};
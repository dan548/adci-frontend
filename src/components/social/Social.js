import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Social extends React.Component {
  render() {

    const { className } = this.props;

    return (
      <ul className={`social-list${className ? ` ${className}` : ''}`}>
        <li className={'social-element'}><button className={'social-link facebook'}/></li>
        <li className={'social-element'}><button className={'social-link instagram'}/></li>
        <li className={'social-element'}><button className={'social-link pinterest'}/></li>
      </ul>
    );
  }
}

Social.propTypes = {
  className: PropTypes.string
};
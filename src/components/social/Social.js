import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Social extends React.Component {
  render() {

    const { className, footerWidth } = this.props;

    const transform = footerWidth / 1240;

    return (
      <ul className={`social-list${className ? ` ${className}` : ''}`}>
        <li style={{'transform': `scale(${transform})`}} className={'social-element'}><button className={'social-link facebook'}/></li>
        <li style={{'transform': `scale(${transform})`}} className={'social-element'}><button className={'social-link instagram'}/></li>
        <li style={{'transform': `scale(${transform})`}} className={'social-element'}><button className={'social-link pinterest'}/></li>
      </ul>
    );
  }
}

Social.propTypes = {
  className: PropTypes.string,
  footerWidth: PropTypes.number
};
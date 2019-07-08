import React from 'react';

import './style.css';

export default class Social extends React.Component {
  render() {
    return (
      <ul className={'social-list'}>
        <li className={'social-element'}><button className={'social-link facebook'}/></li>
        <li className={'social-element'}><button className={'social-link instagram'}/></li>
        <li className={'social-element'}><button className={'social-link pinterest'}/></li>
      </ul>
    );
  }
}
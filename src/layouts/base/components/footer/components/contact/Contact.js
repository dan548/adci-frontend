import React from 'react';

import './style.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className={'contact'}>
        <span className={'contact__part'}>MMLAMPADARI sr</span>
        <span className={'contact__part'}>Via Feltrina 00</span>
        <span className={'contact__part'}>31111 Pederobba  (TV)</span>
        <span className={'contact__part'}>0423.123456</span>
        <span className={'contact__part'}>info@mmlampadari.mm</span>
        <span className={'contact__part'}>P.IVA 04123456789</span>
      </div>
    );
  }
}
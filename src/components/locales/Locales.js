import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setLocale } from 'react-redux-i18n';

import './style.css';

class Locales extends React.Component {

  switchLang = (lang) => {
    this.props.changeLocale(lang);
  };

  render() {

    const { className } = this.props;

    return (
      <ul className={`locale-list${className ? ` ${className}` : ''}`}>
        <li onClick={() => this.switchLang('it')} className={'locale'}>ITA</li>
        <li onClick={() => this.switchLang('en')} className={'locale'}>ENG</li>
        <li onClick={() => this.switchLang('de')} className={'locale'}>DEU</li>
        <li onClick={() => this.switchLang('ru')} className={'locale'}>РУС</li>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeLocale: bindActionCreators(setLocale, dispatch)
});

Locales.propTypes = {
  changeLocale: PropTypes.func,
  className: PropTypes.string
};

export default connect(null, mapDispatchToProps)(Locales);
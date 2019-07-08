import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default class BaseLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <main className={'main'}>

        </main>
        <Footer/>
      </React.Fragment>
	);
  }
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired
};
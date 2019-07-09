import React from 'react';
import { withSize } from 'react-sizeme';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SubscribeForm from '../../../../components/form/SubscribeForm';
import Paragraph from '../../../../components/paragraph/Paragraph';
import Social from '../../../../components/social/Social';
import Locales from '../../../../components/locales/Locales';
import Contact from './components/contact/Contact';

import sendSize from '../../../../actions/size/sendSize';

import './style.css';

class Footer extends React.Component {

  componentDidMount() {
    this.props.sendSize(this.props.size.width, this.props.size.height);
  }

  componentDidUpdate() {
    this.props.sendSize(this.props.size.width, this.props.size.height);
  }

  render() {
    return (
      <footer className={'footer'}>
        <div className={'footer__main'}>
          <Paragraph titleClassName={'footer__paragraph-title'} title={'Lampadari made in italy'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'}/>
          <Paragraph titleClassName={'footer__paragraph-title'} title={'lampadari artigianali'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  '}/>
          <Paragraph titleClassName={'footer__paragraph-title'} title={'45 anni di esperienza'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  '}/>
          <div className={'footer__subscribe'}>
            <h3 className={'footer__paragraph-title paragraph__title'}>Newsletter</h3>
            <SubscribeForm className={'footer__subscribe-form'}/>
          </div>
        </div>
        <div className={'footer__bottom'}>
          <Contact/>
          <Social/>
          <Locales/>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  sendSize: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  sendSize: bindActionCreators(sendSize, dispatch)
});

export default connect(null, mapDispatchToProps)(withSize({ monitorHeight: true })(Footer))
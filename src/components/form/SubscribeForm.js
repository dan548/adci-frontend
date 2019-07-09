import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { I18n } from "react-redux-i18n";

import FormField from './field/FormField';
import SubmitButton from '../button/submit/SubmitButton';
import Checkbox from './checkbox/Checkbox';

import './style.css';

class SubscribeForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      name: '',
      email: ''
    }
  }

  onClick = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  onChangeName = (event) => {
    this.setState( {
      name: event.target.value
    })
  };

  onChangeEmail = (event) => {
    this.setState( {
      email: event.target.value
    })
  };

  onSubmit = () => {
    this.setState ({
      checked: false,
      name: '',
      email: ''
    });
  };

  render() {

    const check = () => this.state.checked && this.state.name !== '' && this.state.email !== '';

    return (
      <form className={`form${this.props.className ? ` ${this.props.className}` : ''}`} onSubmit={this.onSubmit}>
        <div className={'footer__form-field-wrapper form-field-wrapper'}>
          <FormField type={'text'} onChange={this.onChangeName} value={this.state.name} className={'footer__form-field'} placeholder={I18n.t('subscribe-form.full-name')}/>
          <FormField type={'e-mail'} onChange={this.onChangeEmail} value={this.state.email} className={'footer__form-field'} placeholder={'Email'}/>
        </div>
        <Checkbox className={'footer__agreement'} onClick={this.onClick} checked={this.state.checked} text={I18n.t('form.agreement')}/>
        <SubmitButton text={I18n.t('subscribe-form.button')} disabled={!check()} className={'footer__subscribe-button'}/>
      </form>
    );
  }
}

SubscribeForm.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = (state) => ({
  locale: state.i18n.locale
});

export default connect(mapStateToProps, null)(SubscribeForm);
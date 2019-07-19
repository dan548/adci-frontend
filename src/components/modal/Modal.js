import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { I18n } from 'react-redux-i18n';
import FormField from '../form/field/FormField';
import SubmitButton from '../button/submit/SubmitButton';
import Checkbox from '../form/checkbox/Checkbox';

import './style.css';

class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: false,
      subscribe: false,
      firstName: '',
      lastName: '',
      eMail: '',
      password: ''
    }
  }

  onClickData = () => {
    this.setState({
      data: !this.state.data
    });
  };

  onClickSubscribe = () => {
    this.setState({
      subscribe: !this.state.subscribe
    });
  };

  onChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    });
  };

  onChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    });
  };

  onChangeEMail = (event) => {
    this.setState({
      eMail: event.target.value
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  checkInputs = () => {
    const { data, firstName, lastName } = this.state;

    return data && firstName !== '' && lastName !== '' && this.checkMailPassword();
  };

  checkMailPassword = () => {
    return this.state.eMail !== '' && this.state.password !== '';
  };

  onSubmit = () => {
    this.setState ({
      data: false,
      subscribe: false,
      firstName: '',
      lastName: '',
      eMail: '',
      password: ''
    });
  };

  render() {

    const { close, className } = this.props;

    return (
      <div className={`modal${className ? ` ${className}` : ''}`}>
        <div className={'modal__top'}>
          <div className="modal__header">area riservata</div>
          <button className="modal__close" onClick={close}>
            &times;
          </button>
        </div>
        <div className="modal__content">
          <div className={'modal__login modal__content-part'}>
            <h3 className={'paragraph__title modal__paragraph-title'}>{I18n.t('form.login')}</h3>
            <form className={'form form-login'} onSubmit={this.onSubmit}>
              <div className={'form-field-wrapper form__login-wrapper'}>
                <FormField type={'e-mail'} className={'form__field'} placeholder={I18n.t('form.e-mail')} value={this.state.eMail} onChange={this.onChangeEMail}/>
                <FormField type={'password'} className={'form__field'} placeholder={I18n.t('form.password')} value={this.state.password} onChange={this.onChangePassword}/>
              </div>
              <SubmitButton className={'form__login-button'} text={I18n.t('form.login')} disabled={!this.checkMailPassword()}/>
              <button onClick={() => {}} className={'form__password-recover'}>Password dimenticata</button>
            </form>
          </div>
          <div className={'modal__register modal__content-part'}>
            <h3 className={'paragraph__title modal__paragraph-title'}>{I18n.t('form.register')}</h3>
            <form className={'form'} onSubmit={this.onSubmit}>
              <div className={'form-field-wrapper form__register-wrapper'}>
                <FormField type={'text'} className={'form__field'} placeholder={I18n.t('form.firstName')} value={this.state.firstName} onChange={this.onChangeFirstName}/>
                <FormField type={'text'} className={'form__field'} placeholder={I18n.t('form.lastName')} value={this.state.lastName} onChange={this.onChangeLastName}/>
                <FormField type={'e-mail'} className={'form__field'} placeholder={I18n.t('form.e-mail')} value={this.state.eMail} onChange={this.onChangeEMail}/>
                <FormField type={'password'} className={'form__field'} placeholder={I18n.t('form.password')} value={this.state.password} onChange={this.onChangePassword}/>
              </div>
              <Checkbox className={'modal__checkbox'} onClick={this.onClickData} checked={this.state.data} text={I18n.t('form.agreement')}/>
              <Checkbox className={'modal__checkbox'} onClick={this.onClickSubscribe} checked={this.state.subscribe} text={I18n.t('subscribe-form.sub')}/>
              <SubmitButton text={I18n.t('form.register')} disabled={!this.checkInputs()} />
            </form>
          </div>
        </div>
      </div>
    );
  }

}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  className: PropTypes.string
};

const mapStateToProps = (state) => ({
  locale: state.i18n.locale
});

export default connect(mapStateToProps, null)(Modal);


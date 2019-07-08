import React from 'react';

import { I18n } from "react-redux-i18n";

import './style.css';

import FormField from '../../../../../../components/form/FormField';
import SubmitButton from '../../../../../../components/button/submit/SubmitButton';
import { connect } from 'react-redux';

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
      <form className={'footer__subscribe-form'} onSubmit={this.onSubmit}>
        <div className={'footer__form-field-wrapper'}>
          <FormField type={'text'} onChange={this.onChangeName} value={this.state.name} className={'footer__full-name'} placeholder={I18n.t('subscribe-form.full-name')}/>
          <FormField type={'e-mail'} onChange={this.onChangeEmail} value={this.state.email} className={'footer__e-mail'} placeholder={'Email'}/>
        </div>
        <div className={'footer__agreement'}>
          <input type={'checkbox'} className={'footer__agreement-checkbox'} checked={this.state.checked} onClick={this.onClick}/>
          <label className={'checkbox-label'}>{I18n.t('subscribe-form.agreement')}</label>
        </div>
        <SubmitButton text={I18n.t('subscribe-form.button')} disabled={!check()} className={'footer__subscribe-button'}/>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  locale: state.i18n.locale
});

export default connect(mapStateToProps, null)(SubscribeForm);
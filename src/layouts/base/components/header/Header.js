import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {NavLink} from 'react-router-dom';
import Popup from 'reactjs-popup';

import Dropdown from '../../../../components/dropdown-menu/Dropdown';
import Modal from '../../../../components/modal/Modal';

import './style.css';

class Header extends React.Component {

  render() {

    const fHeight = this.props.footerHeight;

    return (
      <header className={'header'}>
        <Popup overlayStyle={{'background': 'rgba(255, 255, 255, 0.5) none repeat scroll 0% 0%',
        'height': `calc(100vh - ${fHeight}px)`}}
               contentStyle={{'padding': '0', 'background': '#343536', 'height': '44.7%'}}
               trigger={<button className={'header__modal-menu'}>area riservata</button>} modal>
          {close => (
            <Modal close={close}/>
          )}
        </Popup>
        <div className={'header__main'}>
          <div className={'header__logo'}/>
          <div className={'header__menu'}>
            <NavLink exact to={'/'} className={'header__menu-item'} activeClassName={'active'}>
              <Dropdown title={'home'}/>
            </NavLink>
            <NavLink exact to={'/azienda'} className={'header__menu-item'} activeClassName={'active'}>
              <Dropdown title={'azienda'} sections={[
                'storia', 'mm design', 'designer', 'certificazioni'
              ]}/>
            </NavLink>
            <NavLink exact to={'/collezioni'} className={'header__menu-item'} activeClassName={'active'}>
              <Dropdown title={'collezioni'}/>
            </NavLink>
            <NavLink exact to={'/news'} className={'header__menu-item'} activeClassName={'active'}>
              <Dropdown title={'news'}/>
            </NavLink>
            <NavLink exact to={'/contatti'} className={'header__menu-item'} activeClassName={'active'}>
              <Dropdown title={'contatti'}/>
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  footerHeight: PropTypes.number
};

const mapStateToProps = (state) => ({
  footerHeight: state.sizeReducer.footerHeight
});

export default connect(mapStateToProps, null)(Header)
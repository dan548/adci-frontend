import React from 'react';
import PropTypes from 'prop-types';
import { withSize } from 'react-sizeme';
import {connect} from 'react-redux';

import Popup from 'reactjs-popup';
import ImageSlider from 'react-slick-image';

import sliderImage from './images/background.png';
import arrow from './images/arrow.png';

import './style.css';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { height } = this.props.size;

    return(
      <div className={'slick'}>
        <div className={'slick__box'}>
          <div className={'slick__box-title'}>Lampadari contemporanei</div>
          <div className={'slick__box-text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore</div>
        </div>
        <ImageSlider height={height - 3.7} width={100} widthUnit={'vw'} image={sliderImage} basis={[115, 1240, 182]}/>
        <Popup overlayStyle={{'background': 'none'}} contentStyle={{'background': 'none', 'border': 'none', 'padding': '0',
          'margin': `auto 3.1vw ${this.props.footerHeight}px`, 'width': '100%'}}
               trigger={<button className={'slider-menu__button'}><img src={arrow} alt={'button'}/></button>} modal>
          {close => (
            <div style={{'height': `${height * 0.29850746268}px`}} className={'slider-menu'}>
              <button className={'slider-menu__button slider-menu__button_open'} onClick={close}>
                <img src={arrow} alt={'button'}/>
              </button>
              <div className={'slider-menu__blocks'}>
                <div style={{'backgroundColor': '#e2d1a6'}} className={'slider-menu__block'}>
                  <div className={'slider-menu__title'}>Stai pensando ad un progetto?</div>
                  <div className={'slider-menu__text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore</div>
                  <div style={{'color': 'white'}} className={'slider-menu__more'}>Approfondisci</div>
                </div>
                <div style={{'backgroundColor': 'white'}} className={'slider-menu__block'}>
                  <div className={'slider-menu__title'}>Vi aspettiamo alla fiera Euroluce</div>
                  <div className={'slider-menu__text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore</div>
                  <div className={'slider-menu__more'}>Approfondisci</div>
                </div>
                <div style={{'backgroundColor': 'black', 'color': 'white'}} className={'slider-menu__block'}>
                  <div className={'slider-menu__title'}>Scopri la nuova collezione</div>
                  <div className={'slider-menu__text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore</div>
                  <div className={'slider-menu__more'}>Approfondisci</div>
                </div>
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  }
}

Home.propTypes = {
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  footerHeight: PropTypes.number
};

const mapStateToProps = (state) => ({
  footerHeight: state.sizeReducer.footerHeight
});

export default connect(mapStateToProps, null)(withSize({ monitorHeight: true, monitorWidth: true })(Home))
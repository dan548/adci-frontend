import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Dropdown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hovered: null
    }
  }

  handleMouseOver = (title) => {
    this.setState({
      hovered: title
    });
  };

  handleMouseOut = () => {
    this.setState({
      hovered: null
    });
  };

  render() {
    const { className, title, sections } = this.props;

    return (
      <div onMouseOver={() => this.handleMouseOver(title)} onMouseOut={this.handleMouseOut} className={`dropdown${className ? ` ${className}` : ''}`}>
        <div className={'dropdown__title'}>{title}</div>
        <div className={`${sections ? 'dropdown__options' : ''}${this.state.hovered === title ? '' : ' dropdown__options_hidden'}`}>
          {sections ? sections.map( (item) => {
            return <div key={item} className={'dropdown__option'}>{item}</div>;
          }) : ''}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string
};
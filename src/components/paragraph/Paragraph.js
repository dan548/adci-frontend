import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Paragraph extends React.Component {

  render() {

    const { title, text, titleClassName, className } = this.props;

    return (
      <div className={`paragraph${className ? ` ${className}` : ''}`}>
        <h3 className={`paragraph__title${titleClassName ? ` ${titleClassName}` : ''}`}>{title}</h3>
        <p className={'paragraph__text'}>{text}</p>
      </div>
    );
  }
}

Paragraph.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  titleClassName: PropTypes.string,
  className: PropTypes.string
};

Paragraph.defaultProps = {
  title: ''
};
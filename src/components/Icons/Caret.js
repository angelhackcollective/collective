import React from 'react';
import PropTypes from 'prop-types';

const Caret = ({
  onClick,
  className,
  fill = 'none',
  stroke = '#fff',
  height = '9',
  width = '20',
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 9" onClick={onClick} className={className}>
    <path fill={fill} fillRule="evenodd" stroke={stroke} d="M19 9l-9-9-9 9"/>
  </svg>
);

Caret.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Caret;

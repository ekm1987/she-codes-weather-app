import React from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles


const Button = ({ onButtonClick, ...props }) => {
  return <button className="Button" onClick={onButtonClick}>{props.children}</button>;
};

export default Button;

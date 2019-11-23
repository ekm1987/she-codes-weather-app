import React from 'react';
import './TextLink.css';

const TextLink = ({ onButtonClick, ...props }) => {
  return (
    <div>
      <button className="TextLink" onClick={onButtonClick}>{props.children}</button>
    </div>
  );
};

export default TextLink;
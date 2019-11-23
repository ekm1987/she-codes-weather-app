import React from 'react';
import './TextInput.css';

const TextInput = ({name, value, onChange, ...props }) => {
  return <input type="text" className="Inputs" name={name} value={value} onChange={onChange} />;
};

export default TextInput;

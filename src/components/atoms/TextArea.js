import React from 'react';
import './TextArea.css';

const TextArea = ({name, value, onChange, ...props }) => {
  return <textarea className="TextArea" name={name} value={value} onChange={onChange} />;
};

export default TextArea;
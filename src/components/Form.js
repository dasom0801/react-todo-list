import React from 'react';
import './Form.css';

const Form = ({ value, onChange, onCreate, onKeyPress, fontColor}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{ color: fontColor}}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
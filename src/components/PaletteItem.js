import React, {Component} from 'react';
import './PaletteItem.css';

const PaletteItem = ({ color, onColorChange, active, index}) => {
  return (
    <div 
      className={`color ${active? "active": ""}`} 
      style ={{background: color}}
      onClick={() => onColorChange(index)}
    />
  )
}

export default PaletteItem;
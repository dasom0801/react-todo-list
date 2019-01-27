// Palette 컴포넌트를 만드세요
// TodoListTemplate 에서 Palette 가 들어갈 자리를 만드세요
// 색상['#343a40', '#f03e3e', '#12b886', '#228ae6'] 를 Palette 컴포넌트의 props 로 전달하고, 이를 컴포넌트 배열로 변환하세요.
// App 의 state 에 color 값을 추가하세요
// color 를 변경하는 메소드를 만드세요
// 필요한 props 를 Palette 에 전달하세요.
// handleCreate 에서 새 Todo 를 만들 때 color 값을 집어넣도록 설정하세요
// Form 의 input 텍스트가 현재 선택된 색으로 보여지게 하세요
// TodoItem 이 렌더링 될 때 텍스트를 주어진 색으로 보여지게 하세요

import React, { Component } from 'react';
import PaletteItem from './PaletteItem';

const Palette = ({ colors, fontColorIndex, onColorChange}) => {
  const paletteList = colors.map((color, index) => {
    const active = index === fontColorIndex ? true : false;  
    return (<PaletteItem
      color={color}
      active={active}
      index={index}
      key={`color-${index}`}
      onColorChange={onColorChange} />
    )
  });
  return (
    <div className="palette">
      {paletteList}
    </div>
  );
}

export default Palette;
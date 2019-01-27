import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // 컴포넌트 리렌더링 여부를 결정
    // 업데이트에 영향을 끼치는 조건을 return해주면 된다. 
    // 구현하지 않으면 기본 true
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(({id, text, checked, color}) => (
        <TodoItem 
          id={id}
          text={text}
          checked={checked}
          color={color}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      ) 
    );

    return (
      <div>
        {todoList}
      </div>
    );
 }
}

export default TodoItemList;
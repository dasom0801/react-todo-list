import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

class App extends Component {
  id = 0;
  state = {
    input: '',
    fontColorIndex: 0,
    colors: ['#343a40', '#f03e3e', '#12b886', '#228ae6'] ,
    todos: [
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () =>{
    const { input, todos, fontColorIndex, colors } = this.state;
    this.setState({
      input: '', // 인풋을 비우고
      //concat 을 사용하여 배열에 추가
      todos: todos.concat({
          id: this.id++,
          text: input, 
          checked: false,
          color: colors[fontColorIndex]
        })
    });
  }

  handleKeyPress = (e) => {
    //눌러진 키가 Enter면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id를 가지고 몇번쨰 아이템인지 찾기
    const index = todos.findIndex(todo => todo.id === id); 
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    //기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleColorChange = (index) => {
    // 선택된 색상의 index를 state에 덮어쓰기.
    this.setState({
      fontColorIndex: index
    });
  }

  render() {
    const { input, todos, colors, fontColorIndex } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleColorChange
    } = this;

    return (
      <TodoListTemplate 
      palette={<Palette 
        colors={colors}
        onColorChange={handleColorChange}
        fontColorIndex={fontColorIndex}
      />}
      form={
        <Form
          value={input}
          fontColor = {colors[fontColorIndex]}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItems: []
    }
  }

  handleAddTodoItem = item => {
    const newItem = {
      name: item,
      id: Date.now,
      completed: false
    }
    this.setState({
      ...this.state,
      todoItems: [...this.state.todoItems, newItem]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={ this.handleAddTodoItem }/>
        <TodoList />
      </div>
    );
  }
}

export default App;

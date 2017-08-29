import React from 'react';

// Load application concerns
import TodoList from './todo-list';
import TodoForm from './todo-form';

class TodoApp extends React.Component {

  constructor(props) {
    super(props);

    this.createEntry = this.createEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);

    this.state = {
      todos: ['get food', 'drink water']
    }
  }

  createEntry(todo) {
    this.setState({todos: this.state.todos.concat(todo)});
  }

  deleteEntry(todo) {
    this.setState({todos: this.state.todos.filter(t => t !== todo)});
  }

  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} deleteEntry={this.deleteEntry} />
        <TodoForm createEntry={this.createEntry} />
      </div>
    );
  }
}

export default TodoApp;

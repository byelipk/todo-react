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
      todos: this.props.todos
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
        <h1>{this.props.title}</h1>
        <TodoList todos={this.state.todos} deleteEntry={this.deleteEntry} />
        <TodoForm createEntry={this.createEntry} />
      </div>
    );
  }
}

TodoApp.defaultProps = {
  title: 'Todo List',
  todos: ['get food', 'drink water']
};

export default TodoApp;

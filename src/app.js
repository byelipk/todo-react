// CSS
import './styles.css';

// JS
import React from 'react';
import ReactDOM from 'react-dom';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul id="list">
        {this.props.todos.map((todo, idx) => ( <li key={idx}>{todo}</li> ))}
      </ul>
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.onsubmit = this.onsubmit.bind(this);
    this.oninput  = this.oninput.bind(this);

    this.state = {
      value: '',
      placeholder: 'Start typing...'
    }
  }

  oninput(event) {
    this.setState({ value: event.target.value });
  }

  onsubmit(event) {
    event.preventDefault();
    this.props.createEntry(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.onsubmit}>
        <input type="text"
               name="todo"
               autoComplete="off"
               onInput={this.oninput}
               value={this.state.value}
               placeholder={this.state.placeholder} />
        <input type="submit" name="submit" value="Add" />
      </form>
    );
  }
}

class TodoApp extends React.Component {

  constructor(props) {
    super(props);

    this.createEntry = this.createEntry.bind(this);

    this.state = {
      todos: ['get food', 'drink water']
    }
  }

  createEntry(todo) {
    this.setState({todos: this.state.todos.concat(todo)});
  }

  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
        {React.createElement(TodoList, { todos: this.state.todos })}
        {React.createElement(TodoForm, { createEntry: this.createEntry })}
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(TodoApp),
  document.querySelector('#app'));

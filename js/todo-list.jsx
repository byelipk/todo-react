import React from 'react';

// Load application concerns
import TodoItem from './todo-item';

class TodoList extends React.Component {
  render() {
    return (
      <ul id="list">
        {this.props.todos.map((todo, idx) => (
          <TodoItem
            key={idx}
            text={todo}
            deleteEntry={this.props.deleteEntry} />
        ))}
      </ul>
    );
  }
}

export default TodoList;

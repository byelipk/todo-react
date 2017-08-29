import React from 'react';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);

    this.onclick = this.onclick.bind(this);
  }
  
  onclick() {
    this.props.deleteEntry(this.props.text);
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.onclick} type="button">Delete</button>
      </li>
    );
  }
}

export default TodoItem;

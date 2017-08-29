import React from 'react';

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

export default TodoForm;

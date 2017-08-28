class TodoList {
  constructor() {
    this.todos = [];
    this.form  = document.querySelector('form');
    this.input = this.form.querySelector('input[type="text"]');
    this.list  = document.querySelector('ul');

    this.onSubmit = this.onSubmit.bind(this);

    this.addEventListeners();
  }

  addEventListeners() {
    this.form.addEventListener('submit', this.onSubmit);
  }

  onSubmit(event) {
    event.preventDefault();

    const todo = this.input.value;

    const listItem = document.createElement('li')
    listItem.appendChild(document.createTextNode(todo));

    this.list.appendChild(listItem);

    this.input.value = ''; 
  }
}

export default TodoList;

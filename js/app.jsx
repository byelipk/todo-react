// CSS
import '../css/styles.css';

// JS
import React from 'react';
import ReactDOM from 'react-dom';

// Load application concerns
import TodoApp from './todo-app';

// Boot the app
ReactDOM.render(<TodoApp />, document.querySelector('#app'));

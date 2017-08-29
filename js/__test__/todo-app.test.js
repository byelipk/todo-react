import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import TodoApp from '../todo-app';
import TodoItem from '../todo-item';

test('Jest works', () => {
  expect(1).toEqual(1);
});

test('It renders correctly', () => {
  const app = shallow( <TodoApp /> );

  expect(app).toMatchSnapshot();
});

test('It renders within the correct container', () => {
  const app = shallow( <TodoApp /> );

  expect(app.find('.container').length).toEqual(1);
});

test('It renders the correct title', () => {
  const app = shallow( <TodoApp title='Sherlock' /> );

  expect(app.find('h1').length).toEqual(1);
  expect(app.find('h1').text()).toEqual('Sherlock');
});

test('It adds item to list', () => {
  const app = mount( <TodoApp /> );

  const input = app.find('input[type="text"]');
  const form  = app.find('form');

  expect(app.find('li').length).toEqual(2);

  input.simulate('change', { target: { value: 'Do more work' } });
  form.simulate('submit');

  expect(app.find('li').length).toEqual(3);
});

test('It removes item from list', () => {
  const app = mount( <TodoApp todos={['task1', 'task2']} /> );

  expect(app.find('ul').children().length).toEqual(2);

  const todo = app.find('ul').childAt(0);
  const deleteButton = todo.find('button');
  deleteButton.simulate('click');

  expect(app.find('ul').children().length).toEqual(1);
});

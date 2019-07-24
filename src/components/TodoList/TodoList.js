import React from 'react';
import Todo from '../Todo';

import './styles.sass';

const TodoList = ({ todos, handleToggleTodo, handleRemoveTodo, handleEditTodo }) => (
  todos.length ? (
    <ul className="todo_list">
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          handleToggleTodo={() => handleToggleTodo(todo.id)}
          handleRemoveTodo={() => handleRemoveTodo(todo.id)}
          handleEditTodo={() => handleEditTodo(todo.text, todo.id)}
        />
      )}
    </ul>
  ) : <p>Add a new task</p>
);

export default TodoList;
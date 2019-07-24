import React from 'react';
import cn from "classnames";
import FormEdit from '../../containers/FormEdit';

import './styles.sass';

const Todo = ({ text,
  id,
  completed,
  edited,
  handleToggleTodo,
  handleRemoveTodo,
  handleEditTodo }) => (
    edited ? (
      <FormEdit text={text} id={id} handleEditTodo={handleEditTodo} />
    ) : (
        <li className={cn('todo', { completed })}>
          <div className="text" onClick={handleToggleTodo}>
            {text}
          </div>
          <div className="buttons">
            <div className="btn edit" onClick={handleEditTodo} title="Edit"></div>
            <div className="btn delete" onClick={handleRemoveTodo} title="Remove"></div>
          </div>
        </li>
      )
  );

export default Todo;
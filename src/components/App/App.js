import React from 'react';
import Header from '../Header';
import Filters from '../Filters';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';

import './styles.sass';

const App = () => (
  <div className="container">
    <Header />
    <AddTodo />
    <Filters />
    <VisibleTodoList />
  </div>
);

export default App;
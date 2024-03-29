import React from 'react';
import FilterLink from '../../containers/FilterLink';
import './styles.sass';

const Filters = () => (
  <div className="filters">
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </div>
);

export default Filters;
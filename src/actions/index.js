export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: Date.now(),
  text
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export const editTodo = (text, id) => ({
  type: 'EDIT_TODO',
  text,
  id
});
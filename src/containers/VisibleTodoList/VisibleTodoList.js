import { connect } from 'react-redux';
import { toggleTodo, removeTodo, editTodo } from '../../actions';
import TodoList from '../../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      throw new Error(`Unknown filter: ${filter}`)
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = ({
  handleToggleTodo: toggleTodo,
  handleRemoveTodo: removeTodo,
  handleEditTodo: editTodo
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;


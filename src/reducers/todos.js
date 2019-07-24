const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          edited: false
        }
      ]
    case 'REMOVE_TODO':
      const idx = state.findIndex((todo) => todo.id === action.id);
      return [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ]
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case 'EDIT_TODO':
      return state.map((todo) => {
        return (
          todo.id === action.id)
            ? { ...todo, text: action.text, edited: !todo.edited }
            : todo
      })
    default:
      return state
  }
}

export default todos;
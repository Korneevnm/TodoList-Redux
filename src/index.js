import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import { loadState, saveState } from './utils/localStorage';

const persistedState = loadState();
const store = createStore(reducer, persistedState);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

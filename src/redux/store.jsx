import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { blogApp } from './reducers/rootReducer';
import thunk from 'redux-thunk'

export const store = createStore(
  blogApp,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

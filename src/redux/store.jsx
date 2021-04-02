import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { blogApp } from './reducers/rootReducer';

export const store = createStore(
  blogApp,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
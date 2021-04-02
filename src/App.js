import React from 'react';
import Posts from './components/Posts';
import { Route } from 'react-router-dom'

function App() {
  return (
    <Route
      exact
      path='/:postId?'
      component={Posts}
    />
  );
}

export default App;

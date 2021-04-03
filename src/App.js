import React from 'react';
import Posts from './components/Posts';
import { Redirect, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Route
      exact
      path='/:postId?'
      component={Posts}
    />
      <Redirect exact to='/' />
     </>
  );
}

export default App;

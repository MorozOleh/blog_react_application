import React from 'react';
import Posts from './components/Posts';
import { Redirect, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
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

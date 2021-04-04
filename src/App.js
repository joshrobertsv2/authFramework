import './App.css';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';
import Homepage from './components/homepage';
import Login from './components/login';
import MainContainer from '../src/containers/MainContainer';
import Signup from './components/signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={false} component={Homepage} path="/" exact />
        <PublicRoute restricted={true} component={Login} path="/signin" exact />
        <PublicRoute restricted={true} component={Signup} path="/register" exact />
        <PrivateRoute component={MainContainer} path="/dashboard" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

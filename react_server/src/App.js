import React, { Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  
} from 'react-router-dom';
import Auth from './hoc/auth';

import LandingPage from './components/views/LandingPage/LandingPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LoginPage from './components/views/LoginPage/LoginPage';


function App() {
  return (

    <div>
       <Router>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)}/>
          <Route exact path="/login" component={Auth(LoginPage, false)}/>
        </Switch>
       </Router>
    </div>

  );
}

export default App;

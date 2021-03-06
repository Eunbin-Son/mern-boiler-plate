import React from 'react';

import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  
} from 'react-router-dom';
import Auth from './hoc/auth';
import LandingPage from './components/views/LandingPage/LandingPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import UploadPage from './components/views/UploadPage/UploadPage';

import Navbar from './components/views/Navbar/Navbar';

function App() {
  return (
    <div>
      <Router>    
        <Navbar />
      </Router>
        <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
      <Router>
        <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)}/>
            <Route exact path="/login" component={Auth(LoginPage, false)}/>
            <Route exact path="/upload" component={Auth(UploadPage, true)}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

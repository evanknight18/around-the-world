import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Map from './components/Map';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Map} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/profile" component={Profile} />
        {/* you might want to add more routes here */}
      </Switch>
    </Router>
  );
}

export default App;

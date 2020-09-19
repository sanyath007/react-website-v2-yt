import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/">
          <h1>Home Page.</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

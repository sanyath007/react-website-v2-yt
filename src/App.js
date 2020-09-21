import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import './App.css';
import Services from './components/pages/Services/Services';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;

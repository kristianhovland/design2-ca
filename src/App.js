import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

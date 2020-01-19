import React from 'react';
import { BrowserRouter as Router, 
        Route, 
        Switch } from 'react-router-dom';

/* Import css */
import './App.css';

/* Import components */
import Navigation from '../Navigation/Navigation';

const App = () => {
  return (
    <div className="app">
        <Router>
            <Navigation />
            <Switch>
            
            </Switch>
        </Router>
    </div>
  );
}

export default App;

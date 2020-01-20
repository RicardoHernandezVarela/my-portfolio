import React from 'react';
import { BrowserRouter as Router, 
        Route, 
        Switch } from 'react-router-dom';

/* Import css */
import './App.css';

/* Import ROUTES */
import * as ROUTES from '../../constants/routes';

/* Import components */
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';

const App = () => {
  return (
    <div className="app">
        <Router>
            <Navigation />
            <Switch>
              <Route exact path={ROUTES.HOME} component={Home} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;

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
import Projects from '../Projects/Projects';

const App = () => {
  return (
    <div className="app">
        <Router>
            <Navigation />
            <Switch>
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route exact path={ROUTES.PROJECTS} component={Projects} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
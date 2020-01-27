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
import Teaching from '../Teaching/Teaching';

const App = () => {
  return (
    <div className="app">
      <span class="menu"> > </span>
        <Router>
            <Navigation />
            <Switch>
              <div className="main-content">
                <div class="header"></div>
                  <Route exact path={ROUTES.HOME} component={Home} />
                  <Route exact path={ROUTES.PROJECTS} component={Projects} />
                  <Route exact path={ROUTES.TEACHING} component={Teaching} />
              </div>
            </Switch>

        </Router>
    </div>
  );
}

export default App;

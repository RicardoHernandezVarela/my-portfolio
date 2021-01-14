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
import About from '../Home/About';
import Experience from '../Experience';
import Projects from '../Projects/Projects';
import Teaching from '../Teaching/Teaching';
import Contact from '../Contact/Contact';

class App extends React.Component {

  render() {
    return (
      <div className="app">
          <Router>
              <Navigation />
              
              <div className="main-content">
                <div className="header"></div>
                  <Switch>
                    <Route exact path={ROUTES.HOME} component={About} />
                    <Route exact path={ROUTES.WORK} component={Experience} />
                    <Route exact path={ROUTES.PROJECTS} component={Projects} />
                    <Route exact path={ROUTES.TEACHING} component={Teaching} />
                    <Route exact path={ROUTES.CONTACT} component={Contact} />
                  </Switch>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;

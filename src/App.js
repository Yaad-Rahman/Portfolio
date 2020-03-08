import React from 'react';
import IndexPage from './components/indexpage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/About';
import Contanct from './components/contact';


function App() {
  return (
    <div>

      <Router>

          <Route 
            path="/"
            exact={true}
            component={IndexPage}
          />

          <Route
            path="/about"
            exact={true}
            component={About}
          />

          <Route
            path="/contact"
            exact={true}
            component={Contanct}
          />

      </Router>

    </div>
    
  );
}

export default App;

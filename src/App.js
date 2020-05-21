import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AutoPage } from './pages/AutoPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/auto" exact component={AutoPage} />
      </Switch>
    </Router>
  );
}

export default App;

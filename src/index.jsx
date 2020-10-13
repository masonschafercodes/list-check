import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './global.css';
import App from './components/App/App';
import List1 from './pages/List1';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/list1" component={List1} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

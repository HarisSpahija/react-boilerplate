/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import FormPage from './components/FormPage';
import HomePage from './components/HomePage';

const routing = (
  <Router>
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/form/" component={FormPage} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

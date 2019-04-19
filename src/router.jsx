import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormPage from './components/FormPage';
import HomePage from './components/HomePage';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/form/" component={FormPage} />
    </Router>
  );
};

export default AppRouter;

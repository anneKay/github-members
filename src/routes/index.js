import React, { lazy, suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MemberList from '../components/MemberList';


export default (
  <Router>
    <Switch>
      <Route exact path="/" component={MemberList}>
        
      </Route>
    </Switch>
  </Router>
  
);

import React, { lazy, suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MemberList from '../components/MemberList';
import MemberDetails from '../components/MemberDetails';


export default (
  <Router>
    <Switch>
      <Route exact path="/" component={MemberList} />
      <Route exact path="/:username" component={MemberDetails} />
    </Switch>
  </Router>
  
);

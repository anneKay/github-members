import React, { lazy,Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from "../components/common/Loader";
const MemberDetails = lazy(() => import("../components/MemberDetails"));
const MemberList = lazy(() => import("../components/MemberList"));

export default (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={MemberList} />
        <Route exact path="/:username" component={MemberDetails} />
      </Switch>
    </Suspense>
  </Router>

);

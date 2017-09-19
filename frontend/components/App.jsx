import React from 'react';
import {Route} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import SessionFormContainer from "./session/session_form_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import BenchContainer from './benches/bench_container';

const App = () => (
  <div>
    <h1 className="big-title">Bench BnB</h1>
      <ProtectedRoute exact path="/benches" component={BenchContainer} />
      <AuthRoute exact path="/login" component={SessionFormContainer}/>
      <AuthRoute exact path="/signup" component={SessionFormContainer}/>
      <Route exact path="/" component={GreetingContainer} />
  </div>
);

export default App;

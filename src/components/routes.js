import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Results from '../screens/Results';
import { paths } from '../helpers/constants';

export function Routes() {
  return (
    <Switch>
      <Route exact path={paths.HOME} component={Home} />
      <Route exact path={paths.QUIZ} component={Quiz} />
      <Route exact path={paths.RESULTS} component={Results} />
    </Switch>
  );
}

export default Routes;

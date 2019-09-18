import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Results from '../screens/results';
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

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Countries } from './containers';
import { Landing, NotFound } from './components';
import R from './utils/routes';

function App() {
  return (
    <Switch>
      <Route exact path={R.ROOT} component={Landing}></Route>
      <Route path={R.APP} component={Countries} />
      <Route path={R.NOT_FOUND} component={NotFound} />
      <Redirect to={R.NOT_FOUND} />
    </Switch>
  );
}

export default App;

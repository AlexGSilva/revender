import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Page404 from '../Pages/page404'

const Routes  = () => {
  return(
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="*" component={Page404}></Route>
    </Switch>
  )
}

export default Routes;
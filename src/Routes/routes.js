import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard'
import Pedido from '../Pages/Pedido'
import Cliente from '../Pages/Cliente'
import Financeiro from '../Pages/Financeiro'
import Entrega from '../Pages/Entrega'
import Adm from '../Pages/Adm'

import Page404 from '../Pages/page404'

const Routes  = () => {
  return(
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/dash" component={Dashboard}></Route>
      <Route path="/ped" component={Pedido}></Route>
      <Route path="/cli" component={Cliente}></Route>
      <Route path="/fin" component={Financeiro}></Route>
      <Route path="/ent" component={Entrega}></Route>
      <Route path="/adm" component={Adm}></Route>
      <Route path="*" component={Page404}></Route>
    </Switch>
  )
}

export default Routes;
import React from 'react';

import {BrowserRouter,Switch,Route}  from 'react-router-dom';

import Main from './pages/main/main';
import OrderView from './pages/order/order';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>
        <Switch>
            <Route path="/orcamento" component={OrderView} />
        </Switch>
    </BrowserRouter >
);

export default Routes;
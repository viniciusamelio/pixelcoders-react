import React from 'react';

import {BrowserRouter,Switch,Route}  from 'react-router-dom';

import Main from './pages/main/main';
import OrderView from './pages/order/order';
import AboutView from './pages/about/about';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>
        <Switch>
            <Route path="/orcamento" component={OrderView} />
        </Switch>
        <Switch>
            <Route path="/Sobre" component={AboutView} />
        </Switch>
    </BrowserRouter >
);

export default Routes;
import React from 'react';

import {BrowserRouter,Switch,Route}  from 'react-router-dom';

import Main from './pages/main/main';
import OrderView from './pages/order/order';
import AboutView from './pages/about/about';
import ServicesView from './pages/services/services';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>
        <Switch>
            <Route path="/orcamento" component={OrderView} />
        </Switch>
        <Switch>
            <Route path="/sobre" component={AboutView} />
        </Switch>
        <Switch>
            <Route path="/servicos" component={ServicesView} />
        </Switch>
    </BrowserRouter >
);

export default Routes;
import React from 'react';

import {BrowserRouter,Switch,Route}  from 'react-router-dom';

import Main from './pages/main/main';
import OrderView from './pages/order/order';
import AboutView from './pages/about/about';
import ServicesView from './pages/services/services';
import NotFoundPage from './pages/404';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/orcamento" component={OrderView} />
            <Route path="/sobre" component={AboutView} />
            <Route path="/servicos" component={ServicesView} />
            <Route path="*"  component={NotFoundPage} />
        </Switch>        
        

    </BrowserRouter >
);

export default Routes;
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../pages';

export const Router = () => 
    <HashRouter>
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </HashRouter>
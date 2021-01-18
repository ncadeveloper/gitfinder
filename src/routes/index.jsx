import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Home, Search } from '../pages';

export const Router = () => 
    <HashRouter>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/search/:query">
                <Search/>
            </Route>
            <Redirect to='/' />
        </Switch>
    </HashRouter>
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Home, Search, Details } from '../pages';

export const Router = () => 
    <HashRouter>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/details/:repo">
                <Details />
            </Route>
            <Route path="/search/:type/:query">
                <Search/>
            </Route>
            <Redirect to='/' />
        </Switch>
    </HashRouter>
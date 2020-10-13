import React from 'react'
import{BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import { isAuthenticated} from './Authentication';

import App from '../home/App'
import Auth from '../auth/Auth'
import Cadastro from '../auth/signUp'

const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route {...rest} render={props =>(
        isAuthenticated() ? (
            <Component {...props } />
        ) : (
            <Redirect to={{pathname: '/', state: { from: props.location}}} />
        )
    )} />
);

export default props =>
<BrowserRouter>
   <Switch>
        <Route  exact path='/'>
            <Auth />
        </Route>

        <Route path='/signup'>
            <Cadastro />
        </Route>
        <PrivateRoute path = "/app">
            <App />
        </PrivateRoute>
    </Switch>
</BrowserRouter>


import React from 'react'
import{BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import {isAuthenticated} from './Authentication';

import App from '../home/App'
import Auth from './Auth'
import Cadastro from './SignUp'

const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route {...rest} render={props =>(
        isAuthenticated() ? (
            <Component {...props } />
        ) : (
            <Redirect to={{pathname: '/', state: { from: props.location}}} />
        )
    )} />
);

export default props => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Auth} />
            <Route path="/singup" component={Cadastro} />
            <PrivateRoute path='/app' component={App} />
        </Switch>
        </BrowserRouter>
    )
}



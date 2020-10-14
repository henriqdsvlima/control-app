import React from 'react'
import{BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import {isAuthenticated} from './Authentication';

import App from '../home/App'
import Auth from './Auth'
import Cadastro from './signUp'

const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route {...rest} render={props =>(
        isAuthenticated() ? (
            <Component {...props } />
        ) : (
            <Redirect to={{pathname: '/', state: { from: props.location}}} />
        )
    )} />
);

// const AuthRouter = ({ ...rest }) =>  (
//     <Route {...rest} render={props =>
//         (
//          <Redirect to="/#" />
//         )
//     } />
// )

export default props => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/auth" exact component={Auth} />
            <Route path="/signup" component={Cadastro} />
            <PrivateRoute path='/app' component={App} />
        
        </Switch>
        </BrowserRouter>
    )
}



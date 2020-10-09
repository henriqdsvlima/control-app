import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'


import Auth from '../auth/Auth'
import Cadastro from '../auth/signUp'

export default props =>
<BrowserRouter>
   <Switch>
        <Route  exact path='/'>
            < Auth />
        </Route>

        <Route path='/signup'>
            <Cadastro />
        </Route>
    </Switch>
</BrowserRouter>


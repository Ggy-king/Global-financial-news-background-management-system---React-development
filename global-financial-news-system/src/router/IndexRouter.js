import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from '../views/login/Login'
import NewsSand from '../views/newsSand/NewsSand'

export default function IndexRouter() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" render={() => 
                    localStorage.getItem("token")?
                    <NewsSand></NewsSand>:
                    <Redirect to="/login" />
                } />
            </Switch>
        </HashRouter>
    )
}


import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main, About, Notice, Write, Chat, SignIn, SignUp, SignOut } from './index';

function Routes(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/about" component={About}/>
                <Route path="/notice/form" component={Write}/>
                <Route path="/notice" component={Notice}/>
                <Route path="/chat" component={Chat}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/signout" component={SignOut}/>
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    );
}

export default Routes;
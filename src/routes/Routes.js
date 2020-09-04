
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main, About, Notice, Write, View, Chat, SignIn, SignUp, SignOut, Member } from './index';
import Nav from '../components/Nav';

function Routes(){
    return (
        <Router>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/about" component={About}/>
                <Route path="/notice/form/:id" component={Write}/>
                <Route path="/notice/form" component={Write}/>
                <Route path="/notice/:id" component={View}/>
                <Route path="/notice" component={Notice}/>
                <Route path="/chat" component={Chat}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/signout" component={SignOut}/>
                <Route path="/member" component={Member}/>
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    );
}

export default Routes;

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main, About, Notice, Write, View, Chat, SignIn, SignUp, SignOut, Member } from './index';
import Nav from '../components/Nav';
import styled from 'styled-components';

function Routes(props){

    const { user } = props;

    return (
        <Router>
            <Container>
                <Nav user={user} />
                {user ? 
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/about" component={About}/>
                    <Route path="/notice/form/:id" component={Write}/>
                    <Route path="/notice/form" component={Write}/>
                    <Route path="/notice/:id" component={View}/>
                    <Route path="/notice" component={Notice}/>
                    <Route path="/chat" component={Chat}/>
                    <Route path="/signout" component={SignOut}/>
                    <Route path="/member" component={Member}/>
                    <Redirect path="*" to="/" />
                </Switch>
                : <Switch>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                    <Redirect path="*" to="/" />
                </Switch>}
                
            </Container>
        </Router>
    );
}

const Container = styled.div`
    position:relative;
    z-index:10;
    padding: 120px 1em 6.5em;
    height:100%;
`;


export default Routes;
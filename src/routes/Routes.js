
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main, About, Notice, Write, View, Chat, SignIn, SignUp, SignOut, Member, Private } from './index';
import Nav from '../containers/NavContainer';
import Footer from '../components/Footer';
import styled from 'styled-components';

function Routes(props){

    const { user } = props;

    return (
        <Router>
            <Container>
                <Nav />
                {user ? 
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/about" component={About}/>
                    <Route path="/private" component={Private}/>
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
                    <Route path="/about" component={About}/>
                    <Route path="/private" component={Private}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                    <Redirect path="*" to="/" />
                </Switch>}
                
            </Container>
            <Footer/>
        </Router>
    );
}

const Container = styled.div`
    position:relative;
    z-index:10;
    padding: 120px 1em 7em;
    height:100%;
`;


export default Routes;
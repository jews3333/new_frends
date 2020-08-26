
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main, About} from './index';

function Routes(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/about" component={About}/>
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    );
}

export default Routes;
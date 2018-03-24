import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import Transfer from './containers/Transfer';
import Auth from './containers/Auth';

class Router extends Component {
    render () {
        <Router>
            <Route path="/" component={Auth}/>
            <Route path="/transfer" component={Transfer}/>
        </Router>,
            document.getElementById('container')
    }

}

export default Router;
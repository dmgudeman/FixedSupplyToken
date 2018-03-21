import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import Transfer from './Transfer';
import { transfer2 } from './transfer2';
import { test } from './test';


class Auth extends Component {
    render() {
        return (
            <div>
                <h1>Auth Page</h1>
                <nav>
                    <ul>
                        {/*<li><Link to='/'>Auth</Link></li>*/}
                        <li><Link to='/transfer'>Transfer</Link></li>

                        <li><Link to='/test'>test</Link></li>
                        <li><Link to='/transfer2'>Transfer2</Link></li>

                    </ul>
                    {/*<Route exact path="/" component={Auth}/>*/}
                    <Route path="/transfer" component={Transfer}/>
                    <Route path="/test" component={test}/>
                    <Route path="/transfer2" component={transfer2}/>

                </nav>
            </div>
        )
    }
}

export default Auth;
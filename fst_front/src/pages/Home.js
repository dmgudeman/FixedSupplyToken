import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import Transfer from './Transfer';
import Auth from './Auth';
import { WrappedHorizontalLoginForm }  from './Auth2';
import { transfer2 } from './transfer2';
import { test } from './test';


class Home extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to='/auth'>Auth</Link></li>
                        <li><Link to='/transfer'>Transfer</Link></li>
                        <li><Link to='/test'>test</Link></li>
                        <li><Link to='/transfer2'>Transfer2</Link></li>
                        <li><Link to='auth2'>Auth2</Link></li>
                    </ul>
                    <Route exact path="/auth" component={Auth}/>
                    <Route path="/transfer" component={Transfer}/>
                    <Route path="/test" component={test}/>
                    <Route path="/transfer2" component={transfer2}/>
                    <Route path={"/auth2"} component={WrappedHorizontalLoginForm}/>

                </nav>
            </div>
        )
    }
}

export default Home;
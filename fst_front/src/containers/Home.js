import React, {Component} from 'react';
import { Link, Route,  } from 'react-router-dom';
import Transfer from './Transfer';
import Auth from './Auth';
import { WrappedHorizontalLoginForm }  from './Auth2';
import { WrappedDynamicRule } from './Auth3'
import { transfer2 } from './transfer2';
import { test } from './test';

const routes = [
    { path: "/auth", component: Auth },
    { path: "/transfer", component: Transfer },
    { path: "/test", component: test },
    { path: "/transfer2", component: transfer2},
    { path: "/auth2", component: WrappedHorizontalLoginForm },
    { path: "/auth3", component: WrappedDynamicRule },
]



class Home extends Component {
    componentWillMount() {
        console.log("Home CWM this.props", this.props);
    }
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link exact to='/'>Auth3</Link></li>
                        <li><Link to='/auth'>Auth</Link></li>
                        <li><Link to='/auth3'>Auth3</Link></li>
                        <li><Link to='/transfer'>Transfer</Link></li>
                        <li><Link to='/test'>test</Link></li>
                        <li><Link to='/transfer2'>Transfer2</Link></li>
                        <li><Link to='/auth2'>Auth2</Link></li>
                    </ul>
                    {/*<Route exact path="/auth" component={Auth}/>*/}
                    {/*<Route path="/transfer" component={Transfer}/>*/}
                    {/*<Route path="/test" component={test}/>*/}
                    {/*<Route path="/transfer2" component={transfer2}/>*/}
                    {/*<Route path={"/auth2"} component={WrappedHorizontalLoginForm}/>*/}
                    {/*<Route path={"/auth3"} component={() => <WrappedDynamicRule numnuts={3}/>}/>*/}
                    {routes.map(({path, component: C}) => (
                       <Route
                           path={path}
                           render={(props) => <C {...props}/>}
                       />
                    )) }

                </nav>
            </div>
        )
    }
}

export default Home;
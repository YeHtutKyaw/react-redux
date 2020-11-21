import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Male from './Male'
import Female from './Female'
import User from './User'

const App = props => {
    return (
        <Router>
            <div>           
                <ul>
                    <li><Link to="/male/1">Male</Link></li>
                    <li><Link to="/female">Female</Link></li>
                    
                    <li><Link to="/user/Alice">Alice</Link></li>
                    <li><Link to="/user/Bob">Bob</Link></li>
                </ul>

                <div style={{background: 'cyan', padding: 20}}>
                    <Switch>
                        <Route path="/male" exact><Male /></Route>
                        <Route path="/female"><Female /></Route>

                        <Route path="/user/:name"><User /></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App

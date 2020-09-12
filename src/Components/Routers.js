import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Movie from "../Routes/Movie";
import Search from "../Routes/Search";
import TV from "../Routes/TV";
import Header from "./Header";



const Routers = () => (
    <Router>
        <>
            <Header/>
            <Switch>
                <Route path="/" exact component={Movie} />
                <Route path="/tv" exact component={TV} />
                <Route path="/search" exact component={Search} />
                <Redirect from="*" to="/search" />
            </Switch>
        </>
    </Router>
);

export default Routers;

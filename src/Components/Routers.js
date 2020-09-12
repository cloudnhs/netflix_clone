import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom'
import Movie from "../Routes/Movie";
import Search from "../Routes/Search";
import TV from "../Routes/TV";


const Routers = () => (
    <Router>
        <>
            <Route path="/" exact component={Movie} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />
        </>
    </Router>
);

export default Routers;

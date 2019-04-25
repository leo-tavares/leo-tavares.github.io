import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Automotive from '../pages/automotive/Automotive';
import Header from '../components/Header';
import Programming from '../pages/programming/Programming';

const AppRouter = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/programming/" component={Programming}/>
        <Route path="/automotive/" component={Automotive}/>
    </Router>
)

export default AppRouter;
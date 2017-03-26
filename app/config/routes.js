var React = require("react");
// var router = require("react-router");

import { hashHistory, Router, Route, IndexRoute } from 'react-router'


// var Route = router.Route;
// var Router = router.Router;

// var hashHistory = router.hashHistory;
// var IndexRoute = router.IndexRoute;

var Main = require("../components/Main");

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	{ /*FILL THIS OUT MORE LATER*/}
    </Route>
  </Router>
);


import React from "react";
import { hashHistory, Router, Route, IndexRoute } from 'react-router'

var Main = require("../components/Main");
var Search = require("../components/Search");
var SavedArticles = require("../components/SavedArticles");

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	{ /*FILL THIS OUT MORE LATER*/}
    	<Route path="Search" component={Search} />
		<Route path="SavedArticles" component={SavedArticles} />
    	<IndexRoute component={Search} />
    </Route>
  </Router>
);


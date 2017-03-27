import React from "react";

var Search = require("./Search");

var Main = React.createClass({
	getInitialState: function() {
		return {search_term: ""};
	},
	setTerm: function(term) {
		this.setState({ search_term: term });
	},
    render: function() {
        return (
        	<div className="container">
	        	<nav className = "top-nav">
	            	<div className = "container">
	            		<div className = "nav-wrapper" > 
	            			<a className = "page-title" > React Scraper </a>
	            		</div>
	            	</div> 
	            </nav>
	            <div className="row">
	            	{this.props.children}
	            </div>
	        </div>
        );
    }
});

module.exports = Main;

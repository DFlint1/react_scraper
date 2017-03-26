var React = require("react");

// var Search = require("./Search") //havent done anything w/ this yet

var Main = React.createClass({

	getInitialState: function() {
		return { 
			search_term: "", 
			search_year_start: "", 
			search_year_end: "",
			results: [],
			saved_articles: []
		}
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
	            <div className="container">
	            	{this.props.children}
	            </div>
	        </div>
        );
    }
});

module.exports = Main;

import React from "react";
import Search from "./Search";
import SavedArticles from "./SavedArticles";
import helpers from "./utils/helpers";

var Main = React.createClass({
	getInitialState: function() {
		return {
			search_term: "",
			search_year_start: 1990,
			search_year_end: 2017};
	},
	
    render: function() {
    	const header_style = {
    		textAlign: "center",
    		backgroundColor: "#337ab7",
    		color: "white",
    		maxWidth: "100%"
    	}
        return (
        	<div className="container">
        		<div>
        			<h1 style={header_style}> NYT Article 4 Scrubs </h1>
        		</div>
	            <div>
	            	{this.props.children}
	            	<Search setTerm={this.setTerm} />
	            </div>
		        <div className="row">
		        	<SavedArticles saved_articles={this.state.saved_articles}/>
		        </div> 
	        </div>
        );
    }
});

module.exports = Main;

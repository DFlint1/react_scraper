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
	componentDidMount: function(){
		console.log("starting componentDidMount in main.js");
	    $.ajax({
	      method: "GET",		
	      url: "/api/articles"
	    })
	    .then(function(data) {
	        console.log(data);
	        this.setState({saved_articles: data});
	    });
	},
    render: function() {
    	const header_style = {
    		textAlign: "center",
    		backgroundColor: "#337ab7",
    		color: "white",
    		width: "100%"
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
		        	{this.state.saved_articles && <SavedArticles saved_articles={this.state.saved_articles}/> }
		        </div> 
	        </div>
        );
    }
});

module.exports = Main;



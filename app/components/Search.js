import React from "react";

import SavedArticles from "./SavedArticles";
import Main from "./Main";
import Results from "./Results";

var helpers = require("./utils/helpers");

var Search = React.createClass({
	getInitialState: function() {
		return { 
			search_term: "",
			search_year_start: 1990,
			search_year_end: 2017
		}
	},

	handleSubmit: function(event) {
		event.preventDefault();
		 helpers.searchArticles(this.state.search_term, this.state.search_year_start, this.state.search_year_end).then((data) => {
  			console.log(data);
  			this.setState({results: data});
  		});
  	}, 
	get_topic: function(e) {
		e.preventDefault();
		this.setState({ search_term: e.target.value });
		console.log("I work in line 24");
	},
	get_search_year_start: function(e) {
		e.preventDefault();
		this.setState({ search_year_start: e.target.value });
		console.log("I work in line 31");
	},
	get_search_year_end: function(e) {
		e.preventDefault();
		this.setState({ search_year_end: e.target.value });
		console.log("I work in line 36");
	},

	render: function() {
		return (
	      	<div className="container">
		          <div className="panel panel-primary">
		            <div className="panel-heading">
		              <h3 className="panel-title">Search</h3>
		            </div>
		            <div className="panel-body">
		            	<form onSubmit={this.handleSubmit}>
		            		<div className="form-group row">
		            			<input type="text"  className="form-control" id="topic-search" placeholder="Topic search" onChange={(e) => this.get_topic(e)} />
		            		</div> 

		            		<div className="form-group row">
		            			<input type="number" max="2017" min="1900" required className="form-control" id="start-year-search" placeholder="Search start year" onChange={(e) => this.get_search_year_start(e)}/>
		            		</div>
		            		<div className="form-group row">
		            			<input type="number" max="2017" min="1900" className="form-control" id="end-year-search" placeholder="Search end year" onChange={(e) => this.get_search_year_end(e)}/>
		            		</div>  
		            		<button className="submit" onClick={(event)=>this.handleSubmit(event)}>Submit</button>		            		
		            	</form> 
		            </div>
		          </div>
		        {this.props.children}
		        {this.state.results &&  <Results results={this.state.results}/>}
	    	</div>			
		);
	}
});

module.exports = Search;
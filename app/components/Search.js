import React from "react";

var SavedArticles = require("./SavedArticles");

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
		var search_term = this.state.search_term;
		var search_year_start = this.state.search_year_start;
		var search_year_end = this.state.search_year_end;

		event.preventDefault();
	},
	get_topic: function(e) {
		this.setState({ search_term: event.target.value });
	},
	get_search_year_start: function(e) {
		this.setState({ search_year_start: event.target.value });
	},
	get_search_year_end: function(e) {
		this.setState({ search_year_end: event.target.value });
	},

	render: function() {
		return (
	      	<div className="container">
		        <div className="col-lg-12">
		          <div className="panel panel-primary">
		            <div className="panel-heading">
		              <h3 className="panel-title">Search</h3>
		            </div>
		            <div className="panel-body">
		            	<form onSubmit={this.handleSubmit}>
		            		<div className="form-group row">
		            			<input type="text"  className="form-control" id="topic-search" placeholder="Topic search" onChange={(e) => this.get_topic(e)} />
		            		</div>  

		            		{ /*value={this.state.search_term} onChange={this.handleChange} 

		            	onChange={(event) => this.getTopic(event)}*/}

		            		<div className="form-group row">
		            			<input type="number" max="2017" min="1900" required className="form-control" id="start-year-search" placeholder="Search start year" onChange={(e) => this.get_search_year_start(e)}/>
		            		</div>
		            		<div className="form-group row">
		            			<input type="number" max="2017" min="1900" className="form-control" id="end-year-search" placeholder="Search end year" onChange={(e) => this.get_search_year_end(e)}/>
		            		</div>  
		            		<button type="submit" className="btn btn-primary">Submit</button>		            		
		            	</form> 
		            </div>
		          </div>
		        </div>
		        {/* This code will allow us to automatically dump the correct GrandChild component */}
		        {this.props.children}
		        <div className="row">
		        	<SavedArticles saved_articles={this.state.saved_articles}/>
		        </div>
	    	</div>			
		);
	}
});

module.exports = Search;
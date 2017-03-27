import React from "react";

var SavedArticles = require("./SavedArticles");

var Search = React.createClass({
	getInitialState: function() {
		return { 
			search_term: ""
		}
	},

	handleChange: function(event) {
		this.setState({search_term: event.target.value});
	},
	handleSubmit: function(event) {
		event.preventDefault();
		this.props.setTerm(this.state.search_term)
		this.setState({ search_term });
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
		            		<div className="form-group">
		            			<input type="text" value={this.state.search_term} onChange={this.handleChange} className="form-control" id="topic-search" placeholder="Topic search"/>
		            		</div>
		            	{/*	<div className="form-group">
		            			<input type="number" value={this.state.search_term[1]} onChange={this.handleChange} max="2017" min="1900" required className="form-control" id="start-year-search" placeholder="Search start year"></input>
		            		</div>
		            		<div className="form-group">
		            			<input type="number" value={this.state.search_term[2]} onChange={this.handleChange} max="2017" min="1900" className="form-control" id="end-year-search" placeholder="Search end year"></input>
		            		</div>   */ }
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
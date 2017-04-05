import React from "react";


var Results = React.createClass({
	handleSubmit: function(event){
		event.preventDefault();
	    event.target.style.visibility='hidden';
	    this.setState({new_article: this.props.results[event.target.value]});
	},	
	componentDidUpdate: function(){
	    $.ajax({
	      method: "POST",		//TODO WORK MORE HERE
	      url: "/api/articles",
	      data: this.state.new_article
	    })
	    .then(function(data) {
	      if (data.ok) {
	        console.log("returned yo");
	      }
	    });

	},
	loop_through_results: function(){
		var items = [];
		const inliner = {
			display: "inline-block"
		};
		const save_article_style = {
			marginLeft: "10px"
		}
		for (var i=0; i<5; i++){
			var item = this.props.results[i];
			items.push(
				<div key={i}>
					<h5 style={inliner}><a style={inliner} href={item.web_url}>{item.headline.main}</a></h5>
					<button value={i} className="submit" style={inliner} style={save_article_style} onClick={(event)=>this.handleSubmit(event)}>save article</button>
					<p> {item.lead_paragraph} </p>
					{i < 4 && <hr /> }
				</div> 
				);
		}
		return items;
	},

	render: function() {
		return (
				<div className="panel panel-primary">
					<div className="panel-heading">
	    				<h3 className="panel-title">Results</h3>
	  				</div>
	  				<div className="panel-body">
	  					{this.loop_through_results()}
	  				</div>
				</div>
		);
	}
});

module.exports = Results;
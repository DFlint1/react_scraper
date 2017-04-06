import React from "react";

var SavedArticles = React.createClass({
	getInitialState: function() {
		return {
			saved_articles: "",
			article_to_delete: ""
		}
	},
	handleDelete: function(event){
		var that = this;
		event.preventDefault();
	    var article_id = event.target.value;
	    this.setState({article_to_delete: article_id});
	   	$.ajax({
	      method: "DELETE",	
	      url: "/api/articles/" + article_id,
	    })
	    .then(function(data) {
	      if (data.ok) {
	      	console.log(data);
	      	console.log(that.state.article_to_delete);

	        var updated_articles = that.props.saved_articles.filter(item => item._id != that.state.article_to_delete);
	        that.setState({saved_articles: updated_articles});
	      }
	    }); 
	},

	loop_through_articles: function(){
		var articles = [];
		const inliner = { display: "inline-block" };
		const save_article_style = { marginLeft: "10px" }

		if (this.state.saved_articles != "") { var item = this.state.saved_articles; }
		else {var item = this.props.saved_articles;}

		for (var i=0; i< item.length; i++){
			var current_item = item[i];
			articles.push(
				<div key={i}>
					<h5 style={inliner}><a style={inliner} href={current_item.web_url}>{current_item.headline}</a></h5>
					<button value={current_item._id} key={i} className="submit" style={inliner} style={save_article_style} onClick={(event)=>this.handleDelete(event)}>delete article</button>
					<p> {current_item.lead_paragraph} </p>
					{i < (item.length -1) && <hr /> }
				</div> 
				);
		}
		return articles;
	},

	render: function() {
		return (
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Saved Articles</h3>
					</div>
					<div className="panel-body">
						{this.loop_through_articles()}
					</div>
			</div>
		);
	}
});

module.exports = SavedArticles;



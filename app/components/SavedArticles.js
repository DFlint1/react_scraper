import React from "react";

var SavedArticles = React.createClass({
	loop_through_articles: function(){
		var articles = [];
		for (var i=0; i<5; i++){
			var item = this.props.saved_articles[i];
			articles.push(
				<div key={i}>
					<h5><a href={item.web_url}>{item.headline.main}</a></h5>
					<p> {item.lead_paragraph} </p>
					{i < 4 && <hr /> }
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



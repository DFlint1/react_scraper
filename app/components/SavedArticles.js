import React from "react";

var SavedArticles = React.createClass({
	render: function() {
		return (
	      <div className="panel panel-default">
	        <div className="panel-heading">
	          <h3 className="panel-title text-center">Saved Articles</h3>
	        </div>
	        <div className="panel-body text-center">

	          {/* Here we use a map function to loop through an array in JSX */}
	          {/* this.props.saved_articles.map(function(article, i) {
	            return (
	              <p key={i}>{article.title} - {article.date}</p>
	            );
	          }) */}
	        </div>
	      </div>
		);
	}
});

module.exports = SavedArticles;
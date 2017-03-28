import axios from "axios";

var authKey = "60ef363d30eb4fc79c853a9acb3cc5b6";

var helper = {
	searchArticles: function(term, start_year, end_year) {
		var query_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=${term}&begin_date=${start_year}0101&end_date=${end_year}`;
		$.ajax({ url: query_url, method: "GET" }).done(function(data) {
			console.log(data);
		});
	}
};
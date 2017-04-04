import axios from "axios";

var authKey = "60ef363d30eb4fc79c853a9acb3cc5b6";

var helper = {
    searchArticles: function(term, start_year, end_year) {
        var query_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=${term}&begin_date=${start_year}0101&end_date=${end_year}0101`;
        return axios.get(query_url).then(function(response) {
        	return response.data.response.docs;
        });
    },

    getHistory: function() {
    	return axios.get("/api");
    },

    postResults: function(results) {
        return axios.post("/api/results", {results: results})
    }
};

module.exports = helper;

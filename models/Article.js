var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	headline: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	web_url: {
		type: String,
		required: true
	},
	lead_paragraph: {
		type: String
	}
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;

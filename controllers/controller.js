var Article = require("../models/Article");

module.exports = {
    save: function(item, cb) {
        var new_article = {
            web_url: item.web_url,
            headline: item.headline.main,
            lead_paragraph: item.lead_paragraph
        };
        Article.create(new_article, function(err, doc) {
            if (err) {
                console.log(err);
            }
            // Or just log the doc we saved
            else {
                console.log(doc);
                // Place the log back in this callback function
                // so it can be used with other functions asynchronously
                cb(doc);
            }
        })
    },

};

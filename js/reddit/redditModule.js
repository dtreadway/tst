// this file contains all required files for the reddit feature
module.exports = function(app) {
    require('./reddit-info.controller')(app);
    require('./RedditList.factory')(app);
}
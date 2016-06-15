module.exports = function(app) {
    app.service('commonService', function() {
        this.whatUp = function() {
            console.log('what up yo??');
        }
    })
}
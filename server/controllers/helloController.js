const apiService = require('services/apiService'),
    apiConfig = require('config/apiConfig');

module.exports = function( app, passport ) {
    app.get('/', helloHandler);
};

function helloHandler(req, res, next) {
    res.render('hello');
}
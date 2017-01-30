const apiService = require('services/apiService'),
    apiConfig = require('config/apiConfig');

module.exports = function( app, passport ) {
    app.get('/', myHandler);
    //app.get('/about', aboutHandler);
    app.get('/checkout', aboutHandler1);
    app.get('/cart', aboutHandler2);
    app.get('/shop', aboutHandler3);
    app.get('/single-product', aboutHandler5);
    //app.get('/shop.html', aboutHandler);

};

function myHandler(req, res, next) {
    res.render('index');
}

function aboutHandler1(req, res, next) {
    res.render('checkout');
}

function aboutHandler2(req, res, next) {
    res.render('cart');
}
function aboutHandler3(req, res, next) {
    res.render('shop');

}

function aboutHandler5(req, res, next) {
    res.render('single-product');
}

function aboutHandler4(req, res, next) {
    res.render('index');
}
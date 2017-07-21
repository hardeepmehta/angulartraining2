const apiService = require('services/apiService'),
    apiConfig = require('config/apiConfig'),
    logger = require('services/loggerService'),
    authController = require('controllers/authController');

module.exports = function(app) {
    authController(app);
};

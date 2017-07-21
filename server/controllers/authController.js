const apiService = require('services/apiService'),
    apiConfig = require('config/apiConfig'),
    Sequelize = require('sequelize'),
    util = require('util'),
    path = require('path'),
    sequelize = new Sequelize(process.env['MYSQL_DB'], process.env['MYSQL_USERNAME'], process.env['MYSQL_PASSWORD'], {
      host: process.env['MYSQL_HOST'],
      port: process.env['MYSQL_PORT'],
      logging: true
    }),
    Course = sequelize.define('Course', {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.STRING
      }
    }, {
      freezeTableName: true
    });

module.exports = function( app ) {
  app.get('/mohit', function( req, res ) {
    Course.findAll({
      where: {

      }
    })
    .then(function( data ) {
      res.send( data );
    }, function( data ) {
      res.send( data );
    });
  });

  app.post('/api/course', function( req, res ) {
    res.send({
      "id": 1000,
      "title": "Mohit",
      "description": "GAMING FREAK!!!!!",
      "duration": "100",
      "video": "mohit.mp4",
      "createdAt": "0000-00-00",
      "updatedAt": "0000-00-00"
    });
  });

  app.get('/api/video/:id', function( req, res ) {
    res.send({
      "id": req.params.id,
      "title": "Mohit",
      "description": "GAMING FREAK!!!!!",
      "duration": "100",
      "video": "mohit.mp4",
      "createdAt": "0000-00-00",
      "updatedAt": "0000-00-00"
    });
  });
}

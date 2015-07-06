'use strict';

module.exports = function(app) {
    var genres = require('../../app/controllers/genres.server.controller');
    var users = require('../../app/controllers/users.server.controller');

    app.route('/genres')
      .get(genres.list)
      .post(users.requiresLogin, genres.create);
    
    app.route('/genres/:genreId')
        .get(genres.read)
        .put(users.requiresLogin, genres.update)
        .delete(users.requiresLogin, genres.delete);
    
    app.param('genreId', genres.genreByID);
};
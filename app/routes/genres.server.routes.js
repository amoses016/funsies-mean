'use strict';

module.exports = function(app) {
    var genres = require('../../app/controllers/genres.server.controller');

    app.route('/genres')
      .get(genres.list)
      .post(genres.create);
    
    app.route('/genres/:genreId')
        .get(genres.read)
        .put(genres.update)
        .delete(genres.delete);
};
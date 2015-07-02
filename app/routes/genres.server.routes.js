'use strict';

module.exports = function(app) {
    var genres = require('../../app/controllers/genres.server.controller');

    app.route('/genres')
      .get(genres.list)
      .post(genres.create);
};
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Genre = mongoose.model('Genre'),
    _ = require('lodash');

/**
 * Create a Genre
 */
exports.create = function(req, res) {
    var genre = new Genre(req.body);

    genre.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.status(201).json(genre);
        }
    });
};

/**
 * Show the current Genre
 */
exports.read = function(req, res) {
    Genre.findById(req.params.genreId).exec(function(err,genre) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            if (!genre) {
                return res.status(404).send({
                    message: 'Genre not found'
                });
            }
            res.json(genre);
        }
    });
};

/**
 * Update a Genre
 */
exports.update = function(req, res) {

};

/**
 * Delete an Genre
 */
exports.delete = function(req, res) {

};

/**
 * List of Genres
 */
exports.list = function(req, res) {
    Genre.find().exec(function(err, genres) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(genres);
        }
    });
};
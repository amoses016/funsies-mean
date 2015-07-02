'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Genre Schema
 */
var GenreSchema = new Schema({
	// Genre model fields   
	// ...
});

mongoose.model('Genre', GenreSchema);
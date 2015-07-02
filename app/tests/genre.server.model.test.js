'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
    mongoose = require('mongoose'),
    Genre = mongoose.model('Genre');

/**
 * Unit tests
 */
describe('Genre Model', function() {

    describe('Saving', function() {
        it('saves new record');

        it('throws validation error when name is empty');

        it('throws validation error when name longer than 15 chars');

        it('throws validation error for duplicate genre name');
    });

});
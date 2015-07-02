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
        it('saves new record', function(done) {
            var category = new Genre({
                name: 'Action-test',
                description: 'Movies that are categorized by the emphasis on dramatic action sequences'
            });

            category.save(function(err, saved) {
                should.not.exist(err);
                done();
            });
        });

        it('throws validation error when name is empty', function(done) {   
            var category = new Genre({
                description: 'Movies that are categorized by the emphasis on dramatic action sequences'
            });

            category.save(function(err) {
                should.exist(err);
                err.errors.name.message.should.equal('name cannot be blank');
                done();
            });
        });

        it('throws validation error when name longer than 15 chars', function(done) {
            var category = new Genre({
                name: 'Super Awesome Exciting Action Fun Time'
            });

            category.save(function(err, saved) {
                should.exist(err);
                err.errors.name.message.should.equal('name must be 15 chars in length or less');
                done();
            });
        });

        it('throws validation error for duplicate category name', function(done) {
            var category = new Genre({
                name: 'Action-test'
            });

            category.save(function(err) {
                should.not.exist(err);

                var duplicate = new Genre({
                    name: 'Action-test'
                });

                duplicate.save(function(err) {
                    err.err.indexOf('$name').should.not.equal(-1);
                    err.err.indexOf('duplicate key error').should.not.equal(-1);
                    should.exist(err);
                    done();
                });
            });
        });
    });

    afterEach(function(done) { 
        // this deletes ALL categories (but is run against a test database)
        Genre.remove().exec();
        done();
    });
});
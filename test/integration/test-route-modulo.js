var supertest = require('supertest');
var assert = require('assert');
var app = require('../../index');

describe('modulo', function() {
  it('should accept numbers', function(done) {
      supertest(app)
      .get('/modulo?a=9&b=4')
      .expect(200)
      .end(done);
  })

  it('should reject strings', function(done) {
      supertest(app)
      .get('/modulo?a=9&b=string')
      .expect(422)
      .end(done);
  })

  it('should respond with a result that is a number', function(done) {
      supertest(app)
      .get('/modulo?a=9&b=4')
      .expect(200)
      .end(function(err, response) {
        assert.ok(!err);
        assert.ok(typeof response.body.result === 'number');
        return done();
      });
  })
})

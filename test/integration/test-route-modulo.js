var supertest = require('supertest');
var app = require('../../index');

describe('modulo', function() {
  it('should accept numbers', function(done) {
      supertest(app)
      .get('/modulo?a=9&b=4')
      .expect(200)
      .end(done);
  })
})

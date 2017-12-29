var assert = require('assert');
var modulo = require('../../lib/modulo');

describe('modulo', function() {
  it('should return 0 when there is no remainder', function(done) {
    var result = modulo(8, 4);
    assert.ok(result === 0);
    return done();
  })

  it('should return 1 when the remainder is 1', function(done) {
    var result = modulo(9, 4);
    assert.ok(result === 1);
    return done();
  })
})

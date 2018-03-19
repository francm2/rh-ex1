var assert = require('assert');
var rms = require ('../remote-math-service.js');

describe('Remote Math Service', function() {
  describe('Verify callOneService', function () {
    it('should return 1 and undefined if callOneService is ok', function () {
      rms.callOneService(function(result1, result2) {
        assert.equal(result1, undefined);
        assert.equal(result2, 1);
      });
    })
  });
  describe('Verify callTwoService', function () {
    it('should return 2 and undefined if callTwoService is ok', function () {
      rms.callTwoService(function(result1, result2) {
        assert.equal(result1, undefined);
        assert.equal(result2, 2);
      });
    })
  });
  describe('Verify remoteMathService', function () {
    it('should return 3 and undefined if remoteMathService is ok', function () {
      rms.remoteMathService(function(result1, result2) {
        assert.equal(result1, undefined);
        assert.equal(result2, 3);
      });
    })
  })
});
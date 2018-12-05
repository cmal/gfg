var assert = require('assert');
var should = require('chai').should()

describe ('1-1 add and sub', function() {
  var sumOfAllSubarrays = require('../sum_of_all_subarrays').sumOfAllSubarrays;
  describe ('#sumOfAllSubarrays()', function() {
    it ('1 should return 1', function() {
      sumOfAllSubarrays([1]).should.equal(1);
    });
    it ('1 2 should return 6', function() {
      sumOfAllSubarrays([1,2]).should.equal(6);
    });
    it ('1 2 3 should return 20', function() {
      sumOfAllSubarrays([1,2,3]).should.equal(20);
    });
    it ('1 2 3 4 should return 50', function() {
      sumOfAllSubarrays([1,2,3,4]).should.equal(50);
    });
    it ('1 2 3 4 5 should return 1', function() {
      sumOfAllSubarrays([1,2,3,4,5]).should.equal(105);
    });
  });
});

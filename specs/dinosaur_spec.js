var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function () {

  var dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur({ type: 'Diplodocus', numberOfOffspring: 3});
  });

  it('should have a type', function () {
    assert.equal('Diplodocus', dinosaur.type);
  });

  it('has how many number of offspring', function () {
    assert.equal(3, dinosaur.numberOfOffspring);
  });

});
var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');

describe('Park', function(){

  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach(function() {
    park = new Park();
    dinosaur1 = new Dinosaur({ type: 'Velociraptor', numberOfOffspring: 5 });
    dinosaur2 = new Dinosaur({ type: 'Pterodactyl', numberOfOffspring: 1 });
    dinosaur3 = new Dinosaur({ type: 'Triceratops', numberOfOffspring: 3 });
    dinosaur4 = new Dinosaur({ type: 'Velociraptor', numberOfOffspring: 6 });
  });

  it('should have no dinosaurs in park to begin with', function() {
    assert.equal(0, park.enclosure.length);
  });

  it('can add dinosaur to park enclosure', function() {
    park.addDinosaur(dinosaur1);
    assert.equal(1, park.enclosure.length);
  });

  it('can add multiple dinosaurs to park enclosure', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.equal(3, park.enclosure.length);
  });

  it('should be able to remove a dinosaur by type from enclosure', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur4);
    park.removeDinosaurByType('Velociraptor');
    assert.equal(1, park.enclosure.length);
  });

  it('should get back all dinosaurs with more than 2 offspring', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.equal(2, park.findAllDinosaursWithMoreThanTwoOffspring().length);
    assert.equal(true, park.findAllDinosaursWithMoreThanTwoOffspring()[0].numberOfOffspring > 2)
  });

});
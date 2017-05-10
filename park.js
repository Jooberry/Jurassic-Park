var Park = function(){
  this.enclosure = [];
};

Park.prototype = {
  emptyPark: function () {
    this.enclosure = [];
  },

  addDinosaur: function (dinosaur) {
    this.enclosure.push(dinosaur);
  },

  removeDinosaurByType: function (type) {
    for (index = this.enclosure.length - 1; index >= 0; index -= 1) {
      if (this.enclosure[index].type === type) {
        this.enclosure.splice(index, 1);
      }
    }
  },

  findAllDinosaursWithMoreThanTwoOffspring: function () {

    var arr = [];

    for (dinosaur of this.enclosure) {
      if (dinosaur.numberOfOffspring > 2)
       arr.push(dinosaur);
    }
    return arr;
  }
};

module.exports = Park;
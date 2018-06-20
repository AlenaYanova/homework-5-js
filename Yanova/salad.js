var Item = require('./item').Item;
var Position = require('./position').Position;

function Salad(description) {
    for (var key in Salad)
        if (Salad[key].getDescription())
            if (description === Salad[key].getDescription()) {
                this._item = Salad[key];
            }
    if (this._item === undefined)
        throw 'Wrong name of salad - ' + description;
}

Salad.prototype = Object.create(Position.prototype);
Salad.prototype.constructor = Salad;

var OLIVIE_DESCRIPTION = 'olivie', OLIVIE_PRICE = 50, OLIVIE_CALORIES = 80;
Salad.OLIVIE = new Item(OLIVIE_DESCRIPTION, OLIVIE_PRICE, OLIVIE_CALORIES);
var CAESAR_DESCRIPTION = 'caesar', CAESAR_PRICE = 100, CAESAR_CALORIES = 20;
Salad.CAESAR = new Item(CAESAR_DESCRIPTION, CAESAR_PRICE, CAESAR_CALORIES);

Salad.prototype.getDescription = function() {
    return {salad: this._item.getDescription()}
};

// var salad1 = new Salad('olivie');
// console.log(salad1.getDescription());

exports.Salad = Salad;
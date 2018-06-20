var Item = require('./item').Item;
var Position = require('./position').Position;

function Drink(description) {
    for (var key in Drink)
        if (Drink[key].getDescription())
            if (description === Drink[key].getDescription()) {
                this._item = Drink[key];
            }
    if (this._item === undefined)
        throw 'Wrong name of drink - ' + description;
}

Drink.prototype = Object.create(Position.prototype);
Drink.prototype.constructor = Drink;

var COLA_DESCRIPTION = 'cola', COLA_PRICE = 50, COLA_CALORIES = 40;
Drink.COLA = new Item(COLA_DESCRIPTION, COLA_PRICE, COLA_CALORIES);
var COFFEE_DESCRIPTION = 'coffee', COFFEE_PRICE = 80, COFFEE_CALORIES = 20;
Drink.COFFEE = new Item(COFFEE_DESCRIPTION, COFFEE_PRICE, COFFEE_CALORIES);

// var drink1 = new Drink('cola');
// console.log(drink1.getDescription());

Drink.prototype.getDescription = function() {
    return {drink: this._item.getDescription()}
};

exports.Drink = Drink;
var Item = require('./item').Item;

function Position() {
    this._item = Position.BASE_ITEM;
}

var BASE_PRICE = 0, BASE_CALORIES = 0, BASE_DESCRIPTION = 'base item';
Position.BASE_ITEM = new Item(BASE_DESCRIPTION, BASE_PRICE, BASE_CALORIES);

Position.prototype.getDescription = function () {
    return this._item.getDescription();
};

Position.prototype.calculatePrice = function() {
    return this._item.calculatePrice();
};

Position.prototype.calculateCalories = function() {
    return this._item.calculateCalories();
};

exports.Position = Position;
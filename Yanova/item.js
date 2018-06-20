function Item(description, price, calories) {
    this._price = price;
    this._calories = calories;
    this._description = description;
}

Item.prototype.calculatePrice = function() {
    return this._price
};

Item.prototype.calculateCalories = function() {
    return this._calories
};

Item.prototype.getDescription = function() {
    return this._description
};

exports.Item = Item;
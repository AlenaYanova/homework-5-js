var Hamburger = require('./hamburger').Hamburger,
    Drink = require('./drink').Drink,
    Salad = require('./salad').Salad,
    deepFreeze = require('./utils').deepFreeze;


function Order() {
    this._order = [];

}

Order.prototype.createPositionByDesc = function(type, description) {
    var position = {};
    if (type === 'hamburger')
        position = new Hamburger(description[0], description[1]);
    else if (type === 'drink')
        position = new Drink(description);
    else if (type === 'salad')
        position = new Salad(description);
    else throw 'Wrong type of position - ' + type;
    return position;
};

Order.prototype.addPositionByDesc = function(type, description){
    if (Object.isFrozen(this)) return this;
    this._order.push(Order.prototype.createPositionByDesc(type, description));
    return this;
};

// Order.prototype.addPositionByConst = function(CONST) {};

Order.prototype.deletePositionByDesc = function(type, description){
    if (Object.isFrozen(this)) return this;
    var position = Order.prototype.createPositionByDesc(type, description);
    for (var i=0; i<this._order.length; i++){
        if (JSON.stringify(this._order[i].getDescription()) === JSON.stringify(position.getDescription())) {
            this._order.splice(i, 1);
            i = this._order.length;
        }
    }
    return this;
};

// Order.prototype.deletePositionByNumber = function(number){};

Order.prototype.calculatePrice = function() {
    var price = 0;
    for (var i=0; i<this._order.length; i++) {
        price += this._order[i].calculatePrice();
    }
    return price;
};

Order.prototype.calculateCalories = function () {
    var calories = 0;
    for (var i=0; i<this._order.length; i++) {
        calories += this._order[i].calculateCalories();
    }
    return calories;
};

Order.prototype.getDescription = function () {
    var order = [];
    for (var i=0; i<this._order.length; i++) {
        order.push(this._order[i].getDescription())
    }
    return order;
};

Order.prototype.getCheck = function() {
    return {order: this.getDescription(),
        price: this.calculatePrice(),
        calories: this.calculateCalories()};
};

Order.prototype.payOrder = function() {
    return deepFreeze(this);
};



var ord1 = new Order();
ord1.addPositionByDesc('salad', 'olivie').addPositionByDesc('drink', 'cola').addPositionByDesc('hamburger', ['small', ['salad']]);
ord1.deletePositionByDesc('salad', 'olivie');
ord1 = ord1.payOrder();
ord1.deletePositionByDesc('drink', 'cola');
console.log(ord1.getCheck());

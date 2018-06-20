var Item = require('./item').Item;
var Position = require('./position').Position;

/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 */
function Hamburger(size, stuffing) {
    if (size === 'small')
        this._size = Hamburger.SIZE_SMALL;
    else if (size === 'large')
        this._size = Hamburger.SIZE_LARGE;
    else throw 'Wrong size of hamburger';

    this._stuffing = [];
    if (stuffing.length === 0)
        throw 'Hamburger should have a stuffing';
    for (var i=0; i < stuffing.length; i++){
        if (stuffing[i] === 'cheese')
            this._stuffing.push(Hamburger.STUFFING_CHEESE);
        else if (stuffing[i] === 'salad')
            this._stuffing.push(Hamburger.STUFFING_SALAD);
        else if (stuffing[i] === 'potato')
            this._stuffing.push(Hamburger.STUFFING_POTATO);
        else throw 'Wrong stuffing of hamburger - ' + stuffing[i].toString();
    }
}

Hamburger.prototype = Object.create(Position.prototype);
Hamburger.prototype.constructor = Hamburger;


/* Размеры, виды начинок и добавок */
var SIZE_SMALL_DESCRIPTION = 'small', SIZE_SMALL_PRICE = 50, SIZE_SMALL_CALORIES = 20;
Hamburger.SIZE_SMALL = new Item(SIZE_SMALL_DESCRIPTION, SIZE_SMALL_PRICE, SIZE_SMALL_CALORIES);

var SIZE_LARGE_DESCRIPTION = 'large', SIZE_LARGE_PRICE = 100, SIZE_LARGE_CALORIES = 40;
Hamburger.SIZE_LARGE = new Item(SIZE_LARGE_DESCRIPTION, SIZE_LARGE_PRICE, SIZE_LARGE_CALORIES);

var STUFFING_CHEESE_DESCRIPTION = 'cheese', STUFFING_CHEESE_PRICE = 10, STUFFING_CHEESE_CALORIES = 20;
Hamburger.STUFFING_CHEESE = new Item(STUFFING_CHEESE_DESCRIPTION, STUFFING_CHEESE_PRICE, STUFFING_CHEESE_CALORIES);

var STUFFING_SALAD_DESCRIPTION = 'salad', STUFFING_SALAD_PRICE = 100, STUFFING_SALAD_CALORIES = 40;
Hamburger.STUFFING_SALAD = new Item(STUFFING_SALAD_DESCRIPTION, STUFFING_SALAD_PRICE, STUFFING_SALAD_CALORIES);

var STUFFING_POTATO_DESCRIPTION = 'potato', STUFFING_POTATO_PRICE = 100, STUFFING_POTATO_CALORIES = 40;
Hamburger.STUFFING_POTATO = new Item(STUFFING_POTATO_DESCRIPTION, STUFFING_POTATO_PRICE, STUFFING_POTATO_CALORIES);

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function (){
    return this._size.getDescription();
};

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {
    var stuffing = [];
    for (var i=0; i<this._stuffing.length; i++){
        stuffing.push(this._stuffing[i].getDescription());
    }
    return stuffing;
};

Hamburger.prototype.getDescription = function (){
    return {hamburger: {size: this.getSize(), stuffing: this.getStuffing()}}
};

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {
    var price = this._size.calculatePrice();
    for (var i=0; i<this._stuffing.length; i++)
        price += this._stuffing[i].calculatePrice();
    return price;
};

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () {
    var calories = this._size.calculateCalories();
    for (var i=0; i<this._stuffing.length; i++)
        calories += this._stuffing[i].calculateCalories();
    return calories;
};

// var hamburger1 = new Hamburger('small', ['cheese']);
// console.log(hamburger1.getDescription());
// console.log(hamburger1.calculateCalories());

exports.Hamburger = Hamburger;
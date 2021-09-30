"use strict";
exports.__esModule = true;
var function_1 = require("fp-ts/function");
function orderPossible(user) {
    user.orders = user.age > 18 ? 1 : 2;
    return user;
}
function orderAmount(user) {
    var amount = 0;
    if (user.dish) {
        amount += user.dish;
    }
    if (user.menu) {
        amount += user.dish;
    }
    return user.orders * amount;
}
var femi = {
    name: 'Oloufemi',
    lastName: 'Adeks',
    age: 28,
    dish: 10
};
var amount = function_1.pipe(femi, orderPossible, orderAmount);
console.log(femi.name + " " + femi.lastName + " is " + femi.age + ". He will pay " + amount + " $ for his order.");

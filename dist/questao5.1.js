"use strict";
var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0], y = arr.slice(1);
console.log(x);
console.log(y);
function soma() {
    var param = arr;
    var soma = param.reduce(function (total, valor) { return total + valor; });
    console.log("Total: " + soma);
}
function soma1(_a) {
    var param = _a.slice(0);
    var soma = param.reduce(function (total, valor) { return total + valor; });
    console.log("Total: " + soma);
}
soma1([1, 2, 3]);

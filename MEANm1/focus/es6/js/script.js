"use strict";

// Templating ES6 : backquote
var name = "Abdel";
var birthDate = 1979;

document.querySelector("h1").innerHTML = "\n    Bonjour " + name + ", votre \xE2ge est " + (2017 - birthDate) + "\n";

// Les variables non-modifiables
var birthYear = 1997;
// birthYear = 2000

// Fonctions fléchées
var twice = function twice() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
    return console.log(param * 2);
};
twice();
twice(2);

// Rest Parameter
var restFunction = function restFunction(x, y) {
    for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        rest[_key - 2] = arguments[_key];
    }

    console.log(rest);
    console.log(x + y + rest.length);
};
restFunction(5, 10, "Julien", true, 55, "Lorem", 34, false);

// Spread operator
var spread = [true, 14];
var myArray = ["Sophia"].concat(spread);
console.log(myArray);
/*
Typage de variable
*/
// Typage implicite
var firstName = "Abdel";
// firstName = true => error
// Typage explicite
var age = 38;
// age = `38` => error
/**/
/*
Typer un tableau
*/
var firstArray = [firstName, "Carole", "Lous"];
var secondeArray = [firstName, age, "Lorem"];
var thirdArray = [firstName, "Carole", "Lous", true];
/**/
/*
Typer une fonction
*/
var sayHello = function () {
    return "Hello World";
};
var twice = function (x, y) {
    return "La somme de x + y est " + (x + y);
};
twice(2, 5);
// Typer la callback d'une fonction
var contUsers = function (names, callback) {
    return names;
};
var users = ["Carole", "Abdel", "Lisa"];
contUsers(users, function () {
    return "Liste des utilisateurs : " + users;
});
var newUser = {
    fullname: "Julien",
    age: 38,
    isMajor: true,
    skills: ["FrontEnd", "Cuisine"]
};
// newUser.isMajor = false => error
var sayHelloToUser = function (param) {
    return "Hello " + param.fullname;
};
sayHelloToUser(newUser);
var julien = {
    userAge: 38,
    isMajor: true
};
julien.userName = "Julien";
julien.frontEnd = 5;
console.log(julien);
var matthieu = {};
matthieu.userAge = 26;
console.log("matthieu ", matthieu);
var pascal = {
    userName: "Pascal",
    userAge: 42,
    isMajor: true,
    frontEnd: 5,
    cuisine: 2
};
/**/ 

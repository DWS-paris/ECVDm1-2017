var Users = /** @class */ (function () {
    function Users(name) {
        this.firstName = name;
        Users.numOfUsers++;
    }
    Object.defineProperty(Users.prototype, "nickName", {
        // Getter et setter : uniquement pour ^ES5 ( --target ES5 )
        get: function () { return this._nickName; },
        set: function (pseudo) { this._nickName = pseudo; },
        enumerable: true,
        configurable: true
    });
    Users.numOfUsers = 0;
    return Users;
}());
var newUser = new Users("John");
newUser.nickName = "The Turtle";
console.log(newUser);
console.log(Users.numOfUsers);

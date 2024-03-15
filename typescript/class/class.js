// Classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, height, age, complexion, isOld) {
        this.name = name;
        this.height = height;
        this.age = age;
        this.complexion = complexion;
        this.isOld = isOld;
        name = name;
        height = height;
        age = age;
        complexion = complexion;
        isOld = isOld;
    }
    Human.prototype.createHuman = function () {
        return "Hi, my name is ".concat(this.name, ". I am ").concat(this.age, " years old. I am ").concat(this.height, "cm tall and I am ").concat(this.complexion, " in complexion. It is ").concat(this.isOld, " that I'm old");
    };
    return Human;
}());
var person = new Human("Walter", 175, 50, "white", true);
// console.log(person.createHuman());
// Inheritacnce
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, height, age, complexion, isOld, game) {
        var _this = _super.call(this, name, height, age, complexion, isOld) || this;
        _this.game = game;
        return _this;
    }
    Employee.prototype.department = function () {
        return "Hi, my name is ".concat(this.name, ". I am ").concat(this.age, " years old. I am ").concat(this.height, "cm tall and I am ").concat(this.complexion, " in complexion. It is ").concat(this.isOld, " that I'm old and I like playing ").concat(this.game, " a lot");
    };
    return Employee;
}(Human));
var childClass = new Employee("James", 180, 25, "black", false, "football");
//  console.log(childClass.department())
//  Access Modifiers
// Encapsulation: making sure that class properties and methods are private unless they need to be public
// Types of Access Modifiers
// private: Can only be accessed within the class its called in
// readonly: Can only be read but not changed
// public: Can be accessed anywhere
// protected: Can only be accessed within the class or subclasses
// polymorphism
// This is call
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makesound = function () {
        console.log("some generic sound");
    };
    return Animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dog.prototype.makesound = function () {
        console.log('woof, woof');
    };
    return dog;
}(Animal));
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cat.prototype.makesound = function () {
        console.log('meow, meow');
    };
    return cat;
}(Animal));
function makeAnimalSound(animal) {
    animal.makesound();
}
var dog1 = new dog('Max');
var cat1 = new cat('Felix');
makeAnimalSound(dog1);
makeAnimalSound(cat1);

var Fruit = "Apple";
console.log("I like to eat " + Fruit);
var value = 10;
function printDouble(num) {
    console.log("Double value: " + (num * 2));
}
printDouble(value);
//Single line comment
/*
  This is a multi-line comment.
  It can span multiple lines.
*/
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello! Nice to meet you.");
    };
    return Person;
}());
var person = new Person();
person.sayHello();

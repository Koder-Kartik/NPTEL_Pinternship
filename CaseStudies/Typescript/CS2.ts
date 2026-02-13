let Fruit:  string  =  "Apple";
console.log("I like to eat " + Fruit);

let value: number = 10;

function printDouble(num: number): void 
{
  console.log("Double value: " + (num * 2));
}

printDouble(value);

//Single line comment
/* 
  This is a multi-line comment.
  It can span multiple lines.
*/

class Person {
  sayHello(): void 
  {
    console.log("Hello! Nice to meet you.");
  }
}

let person = new Person();
person.sayHello();



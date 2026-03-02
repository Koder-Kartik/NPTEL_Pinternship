// describePerson
function describePerson(name:string,age?:number){
  console.log(`Name:${name}, Age:${age ?? "Unknown"}`);
}

// calculatePrice
const calculatePrice=(basePrice:number,discount:number=0.1)=>
  basePrice-basePrice*discount;


// test calls
describePerson("Eve");
describePerson("Frank",28);

console.log(calculatePrice(100));
console.log(calculatePrice(100,0.2));

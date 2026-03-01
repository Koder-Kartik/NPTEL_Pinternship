function displayMember(id:number,name:string,email?:string){
  console.log(`ID:${id}, Name:${name}`);
  if(email) console.log(`Email:${email}`);
}

function calculateFines(...fines:number[]){
  return fines.reduce((a,b)=>a+b,0);
}

function membershipFee(price:number,discountRate:number=0.1){
  return price-price*discountRate;
}

function greetVisitor(v:string,f:(n:string)=>void){ f(v); }

const vipGreet=(n:string)=>console.log(`Welcome VIP ${n}!`);

function factorial(n:number):number{
  return n<=1?1:n*factorial(n-1);
}

function generateReport(data:any[],format?:string){
  return format==="json"
    ? JSON.stringify(data,null,2)
    : data.map(String).join("\n");
}

type VisitorFormatter=(name:string)=>void;
const consoleGreet:VisitorFormatter=n=>console.log(`Hello, ${n}!`);

// displayMember
displayMember(1,"Alice","alice@mail.com");
displayMember(2,"Bob");

// calculateFines
console.log(calculateFines(5,10,2.5));

// membershipFee
console.log(membershipFee(100), membershipFee(100,0.2));

// greet visitors
["Alice","Bob"].forEach(v=>{
  greetVisitor(v,vipGreet);
  greetVisitor(v,consoleGreet);
});

// factorial
console.log(factorial(5));

// reports
const data=[{title:"1984"}];
console.log(generateReport(data),generateReport(data,"json"));

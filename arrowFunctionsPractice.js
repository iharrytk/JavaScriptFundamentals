//Simple Arrow functions

const add=(a,b)=>a+b;
let addition=add(3,6);
console.log(addition);


//Arrow Function with single paramter
const greet=myname=>("Hello,")+myname;
let greeting=greet("Haritha");
console.log(greeting);


//Arrow Functions with mutiple lines
const multiply=(a,b)=>{
    let result=a*b;
    
    return result
}
console.log(multiply(5,7));


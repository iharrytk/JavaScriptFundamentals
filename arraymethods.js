let fruits = ["apple", "banana"];
fruits.push("orange");  
console.log(fruits);  // Output: ["apple", "banana", "orange"]  //push element towards the end


let removedFruit = fruits.pop();  
console.log(removedFruit);  // Output: "orange"
console.log(fruits);  // Output: ["apple", "banana"]  //pop element from the end


let firstFruit=fruits.shift(); // Output: "apple"
console.log(fruits);  // Output: [ "banana"]  //pops element from the start

fruits.unshift("apple");   //adds element to the start of the array
console.log(fruits);  // Output: ["apple", "banana"]
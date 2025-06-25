
//Constructor function
function Person(name,age){
this.name=name;
this.age=age;           //this keyword referes to the new object creted


}

//creating objects using Constructor function
const person1=new Person('harry',30);
const person2=new Person('hermioni',31);

console.log(person1.name);
console.log(person2.age);
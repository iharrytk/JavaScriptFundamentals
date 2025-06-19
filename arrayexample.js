let colours=["red","blue","green"]
console.log(colours[0])     //output:red
console.log(colours[1])     //output:blue
console.log(colours[2])     //output:green
console.log(typeof colours)  //output:Object
//console.log(colours[3])     //output:ReferenceError:Undefined


//loops in arrays
//traditional
for(let i=0;i<colours.length;i++){

console.log(colours[i]);


}

//mordern
let colour1 = ["red", "green", "blue"];
for (let color of colour1) {
    console.log(color);
}



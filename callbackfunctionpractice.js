function orderCoffee(callback) {
  setTimeout(() => {
    callback("☕ Coffee is ready!");
  }, 2000);
}

orderCoffee((coffee) => {
  console.log(coffee);
});

/************************* */

function orderTea(callback){

    setTimeout(()=>{callback("tea is ready!!!")},2000);
}

orderTea((tea)=>{console.log(tea)});
/************************ */

function waitWithCallback(ms, callback) {
 setTimeout(() => {
   callback(`⏳ Waited ${ms}ms (callback)`);
 }, ms);
}


console.log("Start (callback)");


waitWithCallback(3000, (msg) => {
 console.log(msg);
 console.log("End (callback)");
});


console.log("This runs immediately after async call");


/************************************************ */

function waitWithCallback1(ms,callback){

    setTimeout(()=>{callback(`⏳ Waited ${ms}ms (callback)`);

    },ms);
}

console.log("function1-simple task");

waitWithCallback1(3000,(tea)=>{console.log(tea);
    console.log("Ending callback")
});

console.log("function3-simple task");
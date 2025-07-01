/********************************************** */
/*callback*/
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

/*************************************** */
/*Promise using .then*/


function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`⏳ Waited ${ms}ms (promise)`);
    }, ms);
  });
}

console.log("FUNCTION-01: Start (sync)");

function runWithPromise() {
  wait(3000)
    .then((msg) => {
      console.log(msg);
      console.log("FUNCTION-02: End (promise)");
    });
}

console.log("FUNCTION-03: This runs immediately after async call");

runWithPromise();

/************************************************ */
/*Promise using async/await*/

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`⏳ Waited ${ms}ms (promise)`);
    }, ms);
  });
}

console.log("FUNCTION-01: Start (sync)");

async function runWithPromise() {
 const waittime=await wait(3000)
 console.log(waittime);
 console.log("FUNCTION-02: End (promise)")
   
}

console.log("FUNCTION-03: This runs immediately after async call");

runWithPromise();


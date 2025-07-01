function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Sidharth"), 5000);
    });
}

async function showName() {
    console.log("WAIT>>>>>>>>>")
    const name = await fetchName(); // waits for promise to finish
    console.log("Name is:", name);
}

showName();
console.log("Still waiting")

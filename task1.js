let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];
let passedtestcases=testResults.reduce((acc,r)=>r==='pass'?acc+1:acc,0)
let failedtestcases=testResults.reduce((acc,r)=>r==='fail'?acc+1:acc,0)
let skippedtestcases=testResults.reduce((acc,r)=>r==='skipped'?acc+1:acc,0)
let testSummary={'pass':+passedtestcases,'fail':failedtestcases,'skipped':skippedtestcases}
console.log(testSummary)
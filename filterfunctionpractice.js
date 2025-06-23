let numbers=[1,2,3,4,5,6,7,8,9,10]
let evennumbers=numbers.filter(numbers=>numbers%2===0);
console.log(evennumbers);




let testcases=[{testcaseid:1,testresult:'pass'},{testcaseid:2,testresult:'fail'},
    {testcaseid:3,testresult:'pass'},{testcaseid:4,testresult:'fail'},
{testcaseid:5,testresult:'pass'},{testcaseid:6,testresult:'fail'},
{testcaseid:7,testresult:'pass'},{testcaseid:8,testresult:'fail'},
{testcaseid:9,testresult:'pass'},{testcaseid:10,testresult:'fail'}]

let failedtestcases=testcases.filter(testcases=>testcases.testresult==='fail');
console.log(failedtestcases)
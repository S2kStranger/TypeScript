"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const btnAddElement = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number')
        return num1 + num2;
    else if (typeof num1 === 'string' && typeof num2 === 'string')
        return num1 + ' ' + num2;
}
const numResults = [];
const textResults = [];
function printResult(resultObj) {
    console.log(resultObj.val);
}
btnAddElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    console.log(result);
    numResults.push(result);
    const stringResult = add(num1, num2);
    console.log(stringResult);
    textResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It Worked!');
    }, 1000);
});
mypromise.then((result) => {
    console.log(result.split('W'));
});
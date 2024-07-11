const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const btnAddElement = document.querySelector('button')!;

type numberORstring = number | string;
type Result = {val: number; timestamp: Date};

interface resultObject {
    val: number;
    timestamp: Date;
}

function add(num1:numberORstring,num2: numberORstring)
{
    if(typeof num1 === 'number' && typeof num2 === 'number')
        return num1+num2;
    else if(typeof num1 === 'string' && typeof num2 === 'string')
        return num1+' '+num2;
}

const numResults: Array<number> = [];
const textResults: string[] = [];

function printResult(resultObj: resultObject)
{
    console.log(resultObj.val);
}

btnAddElement.addEventListener('click',()=>{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1,+num2);
    console.log(result);
    numResults.push(result as number);
    const stringResult = add(num1,num2);
    console.log(stringResult);
    textResults.push(stringResult as string);
    printResult({val:result as number, timestamp:new Date()});
    console.log(numResults,textResults);

});

const mypromise = new Promise<string>((resolve,reject) => {
    setTimeout(()=>{
        resolve('It Worked!');
    },1000);
})

mypromise.then((result) => {
    console.log(result.split('W'));
})


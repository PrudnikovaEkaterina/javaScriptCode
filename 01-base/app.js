// let num = 42;
// let firsName = 'Kate';
// num = 10;
// const isProgrammer = true;
// // isProgrammer = 45; //error
// // alert(num);
// console.log('Test:', num);
// console.log(num+10);
// const result = document.getElementById('result');
// console.log(result.textContent);
// result.textContent = 40;
let result = document.getElementById('result');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let submitButton = document.getElementById('submit');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
let action = '+';


console.log(typeof result);
console.log(typeof input1);
console.log(typeof input2);

plusButton.onclick = function(){action = '+'};
minusButton.onclick = function(){action = '-'};
multiplyButton.onclick = function(){action = '*'};
divideButton.onclick = function (){action = '/'};

function computeSumWithAction(input1, input2, action){
    let value1 = Number(input1.value);
    let value2 = Number(input2.value);

    if(action=='+') {return value1 + value2;}
    else if (action=='-') {return value1-value2;}
    else if (action=='*') {return value1*value2;}
    else {return value1/value2;}
    // return action =='+' ? value1 + value2 : value1-value2; // тернарный оператор
}

function makeColorResultTextContent(sum){
    if(sum>0)
    result.style.color='green';
    else
    result.style.color='red';

    result.textContent = sum;
}


submitButton.onclick = function (){
   let sum = computeSumWithAction(input1, input2, action);
   makeColorResultTextContent(sum);
   action='+';
}



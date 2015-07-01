var box=document.querySelectorAll('.box');

for (var i=0; i<16; i+=1) {
  box[i].addEventListener('click', show);
}

var operator1=document.querySelector('#operator1');
operator1.addEventListener('click', storeString);
var operator2=document.querySelector('#operator2');
operator2.addEventListener('click', storeString);
var operator3=document.querySelector('#operator3');
operator3.addEventListener('click', storeString);
var operator3=document.querySelector('#operator3');
operator3.addEventListener('click', storeString);
var operator4=document.querySelector('#operator4');
operator4.addEventListener('click', storeString);


var string1;
var string2;
var currentOperator;

function storeString () {
  string1= parseInt(text.substring(0, text.length - 1));
  console.log(string1);
  topBox.innerText=string1;
  console.log(topBox.innerText = this.innerText);
  currentOperator=topBox.innerText;

}

function storeString2(){
  string2= parseInt(text);
  console.log(string2);
  topBox.innerText=string2;
  if (currentOperator==="x") {
    console.log(string1*string2);
    topBox.innerText= string1*string2;
  }
  if (currentOperator==="/") {
    console.log(string1/string2);
    topBox.innerText= string1/string2;
  }
  if (currentOperator==="-") {
    console.log(string1-string2);
    topBox.innerText= string1-string2;
  }
  if (currentOperator==="+") {
    console.log(string1+string2);
    topBox.innerText= string1+string2;
  }

}

var clear = document.querySelector("#box14");
clear.addEventListener('click', function(){topBox.innerText=""});
function clear() {
  console.log("hi");
  //topBox.innerText= 0;
}

var topBox=document.querySelector('#topBox');

function show() {
  if (isNaN(topBox.innerText)) {
    topBox.innerText = this.innerText;
  }
  else {
    topBox.innerText += this.innerText;
  }
  text = document.querySelector('#topBox').innerText;
}

var equal=document.querySelector('#box15');
equal.addEventListener('click', storeString2);





// function whichCalculation() {
//   if (currentOperator==="+") {
//     calculateAdd(string1, string2);
//   }
// }


// function calculateAdd(num1, num2) {
//   console.log(num1+num2);
// }
//
// var printAdd = calculateAdd(string1, string2);
//
// function calculateAdd(num1, num2) {
//    function add() {
//      console.log(num1+num2);
//    }
//    return add;
//  }


//
// function calculateSubtract(num1, num2) {
//   function subtract() {
//     console.log(num1-num2);
//   }
//   return subtract;
// }
//
// var printSubtract = calculateSubtract(5, 3);

// to clear display when AC button is clicked
const allClear = document.querySelector("#ac");
allClear.addEventListener("click", () => {
  number1 = "";
  number2 = "";
  displayNumber = "";
  changeDisplay(displayNumber);
});

const numbers = document.querySelectorAll(".numbers");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals");

// object declaration for operators and numbers
const operators = {
  plus: "+",
  minus: "-",
  multiply: "*",
  divide: "/",
};
const numberList = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};

let number1 = "";
let number2 = "";
let operator = "";
let displayNumber = "";

// to take number1 input and display it
numbers.forEach((button) => {
  button.addEventListener("click", () => {
    for (let key in numberList) {
      if (button.id == key) {
        number1 += numberList[key];
      }
    }
    changeDisplay(number1);
    if (number2 == "") number2 = "0";
    number2 = `${operate(number2, number1, operator)}`;
    console.log(number1);
    console.log(number2);
  });
});

// to display the input
function changeDisplay(value) {
  display.textContent = value;
}

// to take operator choice
const buttons = document.querySelectorAll(".operator");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    for (let key in operators) {
      if (button.id == key) operator = operators[key];
    }
    console.log(number1);
    console.log(number2);
    displayNumber = number2;
    changeDisplay(displayNumber);
    number1 = "";
  });
});

// to run operate function on clicking equal
// equals.addEventListener("click", () => {
//   operate(number2, displayNumber, operator);
//   number1 = "";
//   number2 = "";
// });

// operation functions
function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}
function minus(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}
function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}
function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
}

// operate function
function operate(num1, num2, op) {
  // let result;
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return minus(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return num2;
  }
}

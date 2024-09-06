// to clear display when AC button is clicked
const allClear = document.querySelector("#ac");
allClear.addEventListener("click", () => {
  display.textContent = "";
  number1 = [];
  number2 = [];
  displayNumber = "";
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

let number1 = [];
let number2 = "";
let operator = "";
let displayNumber = "";

// to take number1 input and display it
numbers.forEach((button) => {
  button.addEventListener("click", () => {
    for (let key in numberList) {
      if (button.id == key) {
        number1.push(numberList[key]);
        displayNumber = number1.join("");
      }
    }
    display.textContent = displayNumber;
    console.log(number1);
    console.log(displayNumber);
  });
});

// to take operator choice
const buttons = document.querySelectorAll(".operator");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    for (let key in operators) {
      if (button.id == key) operator = operators[key];
    }
    console.log(operator);
    number2 = number1.join("");
    number1 = [];
  });
});

// to run operate function on clicking equal
equals.addEventListener("click", () => {
  operate(number2, displayNumber, operator);
  number1 = [];
  number2 = [];
});

// operation functions
function add(number1, number2) {
  return (display.textContent = parseInt(number1) + parseInt(number2));
}
function minus(number1, number2) {
  return (display.textContent = parseInt(number1) - parseInt(number2));
}
function multiply(number1, number2) {
  return (display.textContent = parseInt(number1) * parseInt(number2));
}
function divide(number1, number2) {
  return (display.textContent = parseInt(number1) / parseInt(number2));
}

// operate function
function operate(num1, num2, op) {
  switch (op) {
    case "+":
      console.log(add(num1, num2));
      break;
    case "-":
      console.log(minus(num1, num2));
      break;
    case "*":
      console.log(multiply(num1, num2));
      break;
    case "/":
      console.log(divide(num1, num2));
      break;
  }
}

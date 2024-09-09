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
  decimal: ".",
};

let number1 = "";
let number2 = "";
let operator = "";
let displayNumber = "";

// to take number1 input and display it
const numbers = document.querySelectorAll(".numbers");
numbers.forEach((button) => {
  button.addEventListener("click", () => {
    for (let key in numberList) {
      if (button.id == key) {
        number1 += numberList[key];
      }
    }
    changeDisplay(number1);
  });
});

// to take operator choice
const buttons = document.querySelectorAll(".operator");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (number2 == "") number2 = "0";
    number2 = `${operate(number2, number1, operator)}`;
    for (let key in operators) {
      if (button.id == key) operator = operators[key];
    }
    displayNumber = number2;
    changeDisplay(displayNumber);
    number1 = "";
  });
});

// to run operate function as soon as equals button is pressed
const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
  changeDisplay(operate(number2, number1, operator));
  number1 = "";
  number2 = "";
  operator = "";
  displayNumber = "";
});

// operation functions - to operate on 2 given numbers
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
  return (
    Math.round((parseFloat(num1) / parseFloat(num2)) * Math.pow(10, 4)) /
    Math.pow(10, 4)
  );
  // return (parseFloat(num1) / parseFloat(num2)).toFixed(4);
}

// operate function - to call operation functions based on operator passed
function operate(num1, num2, op) {
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return minus(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      if (num2 == 0) {
        changeDisplay("Error!");
        console.log(display.textContent);
        // do something else here?
        return;
      } else {
        return divide(num1, num2);
      }
    default:
      return num2;
  }
}

// to display the any input, output or error
const display = document.querySelector("#display");
function changeDisplay(value) {
  return (display.textContent = value);
}

// to clear display when AC button is clicked
const allClear = document.querySelector("#ac");
allClear.addEventListener("click", () => {
  number1 = "";
  number2 = "";
  operator = "";
  displayNumber = "";
  changeDisplay(displayNumber);
});

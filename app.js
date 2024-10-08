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

let number1 = "0";
let number2 = "";
let operator = "";
let displayNumber = "";

// to display the any input, output or error
const display = document.querySelector("#display");
function changeDisplay(value) {
  display.textContent = value;
}

// to take number1 input and display i
const numbers = document.querySelectorAll(".numbers");
numbers.forEach((button) => {
  button.addEventListener("click", () => {
    number1 = number1.split(""); // to convert number1 into an array
    for (let key in numberList) {
      if (button.id == key) {
        if (number1[0] == 0) number1.splice(0, 1); // to remove appending of multiple zeros
        if (number1[0] == ".") number1.splice(0, 1, "0."); // to append zero before any decimal number

        number1.push(numberList[key]);
      }
    }
    // to handle multiple decimals
    let index = number1.indexOf(".");
    for (let i = index + 1; i < number1.length; i++) {
      if (number1[i] == ".") number1.splice(i, 1);
    }

    // to restrict user not to add insane values by reloading the page
    if (number1.length >= 20)
      if (alert("Stop!, A Calculator can only do so much\nTOP Rocks!")) { // easter egg for TOP peeps
      } else window.location.reload();

    number1 = number1.join(""); // to convert number1 back to string
    changeDisplay(number1);
  });
});

// to take operator choice
const buttons = document.querySelectorAll(".operator");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator !== "" && number1 === "") {
      // Just update the operator without calculating if user presses another operator
      for (let key in operators) {
        if (button.id == key) operator = operators[key];
      }
    } else {
      // Perform the operation only if number1 and number2 are set
      if (number2 == "") number2 = number1; // Store number1 in number2 when pressing an operator for the first time
      else if (number1 !== "") {
        number2 = `${operate(number2, number1, operator)}`;
      }
      for (let key in operators) {
        if (button.id == key) operator = operators[key];
      }
      changeDisplay(number2);
      number1 = ""; // Reset number1 for the next input
    }
  });
});

// to run operate function as soon as equals button is pressed
const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
  if (operator && number1 !== "") {
    number1 = operate(number2, number1, operator); // handles calculations when equals is pressed
    changeDisplay(number1);
    number2 = "";
    operator = "";
  }
});

// operation functions - to operate on 2 given numbers
function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}
function minus(num1, num2) {
  return (
    Math.round((parseFloat(num1) - parseFloat(num2)) * Math.pow(10, 3)) /
    Math.pow(10, 3)
  );
}
function multiply(num1, num2) {
  return (
    Math.round(parseFloat(num1) * parseFloat(num2) * Math.pow(10, 3)) /
    Math.pow(10, 3)
  );
}
function divide(num1, num2) {
  return (
    Math.round((parseFloat(num1) / parseFloat(num2)) * Math.pow(10, 3)) /
    Math.pow(10, 3)
  );
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
        changeDisplay("Snarky Error!");
        return "Snarky Error!"
      } else {
        return divide(num1, num2);
      }
    default:
      return num2;
  }
}

// to clear display when AC button is clicked
const allClear = document.querySelector("#ac");
allClear.addEventListener("click", () => {
  number1 = "0";
  number2 = "";
  operator = "";
  displayNumber = "";
  changeDisplay("0");
});

// backspace function
const backBtn = document.querySelector("#del");
backBtn.addEventListener("click", () => {
  if (number1 != "0") number1 = number1.slice(0, number1.length - 1);
  changeDisplay(number1);
});

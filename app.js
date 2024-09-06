let number1;
let number2 = 0;

let operator = "";

let operators = {
  plus: "+",
  minus: "-",
  multiply: "*",
  divide: "/",
  equals: "=",
};

let numberList = {
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
const buttons = document.querySelectorAll(".operator");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    for (let key in operators) {
      if (button.id == key) operator = operators[key];
    }
    console.log(operator);
    // console.log(operation(10, 5, operator));
  });
});

const numbers = document.querySelectorAll(".numbers");
numbers.forEach((button) => {
  button.addEventListener("click", () => {
    for (let key in numberList) {
      if (button.id == key) number1 = numberList[key];
    }
    console.log(number1);
  });
});

const operation = (number1, number2, operator) =>
  `${number1} ${operator} ${number2}`;

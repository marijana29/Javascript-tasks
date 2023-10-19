console.log("M" + "A" + "R" + "I" + "J" + "A" + "N" + "A");

// Error! Make it work
console.log("Hallo");

// Error! Make it work
console.log("That doesn't work");

// should return true. Change only the operator to fix it.
console.log(50 + 2 === 52);

// should be false. Change only the operator to fix it.
console.log("333" === 333);

// Wrong result: Expected 555 not 855. Change only the operator to fix it.
console.log((600 + 510) / 2);

// Wrong result: Expected a Number 4 received 22
console.log(2 + 2);

//////////////////////////////////////////////////
// Create a console.log that returns true when both division results are equal to 5
console.log(25 / 5); // Result: 5
console.log(50 / 10); // Result: 5
console.log(25 / 5 === 5 && 50 / 10 === 5);

// the first parameter is the name of the person to be greeted. It's a string.
//  The function should return a string that contains the name of person in a welcome msg.
// TODO: implement welcomeMsg function

function welcomeMsg(name) {
  return `Welcome ${name}!`;
}

console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

//////////////////////////////////////////////////

// Implement a calcGrossPrice function.

//  The first parameter is the net price as integer number
//  The second parameter is the tax rate as float number
//  The function should return the gross price
// TODO: implement calcGrossPrice function

function calcGrossPrice(netPrice, taxRate) {
  return netPrice + netPrice * taxRate;
}

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

//////////////////////////////////////////////////
// Implement a addPositive function.

//  The function has two parameters which will always be numbers
//  The function should add the two numbers and return the result
//  If any of the arguments is a negative number, it should be handled as a positive number (see example code)
// TODO: Implement the addPositive function

function addPositive(num1, num2) {
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  return num1 + num2;
}

console.log(addPositive(5 + 9));

console.log(addPositive(2, 3));

console.log(addPositive(3, -5));

console.log(addPositive(-1, -8));

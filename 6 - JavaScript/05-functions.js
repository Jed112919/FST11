// Functions
// Reusable block of code that can be executed whenever needed.
// 1. Function Declaration

let name;
function greet(name) {
    console.log("Hello, welcome to the world of Functions!");
    console.log("Let's go!", name);
  }
  // 2. Calling the function
  greet("Jed");

// 2. Function definition with parameters
// parameter = placeholder
// arguments = values passed to a function's parameters
function sum(num1, num2) {
    return num1 + num2
  }
  console.log("Sum:", sum(1, 2));
  console.log("Sum:", sum(3, 4));
  console.log("Sum:", sum(5, 6));
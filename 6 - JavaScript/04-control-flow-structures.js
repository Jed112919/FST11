// Control Flow Struct

//1. Conditional Statement
    let temperature = 25;
    if (temperature < 0) {
        console.log("It's freezing.");
    } 
    else if (temperature >= 0  && temperature < 20) {
        console.log("It's Cool Outside");
    }
    else if (temperature >= 20  && temperature < 30) {
        console.log("It's Warm Outside");
    }
    else {
        console.log("It's hot outside.");
    }


// 2. Looping Statements
// Repeatedly execute a block of code until a specific condition is met
// For loop
/*
  "components" of a for loop
  1st: Variable Initialization
  2nd: Condition Expression
  3rd: Increment or Decrement -> i += 1; i++
*/
for (i = 1; i <= 3; i++) {
    console.log('For loop count:', i);
  }
let counter = 0;
  while(counter < 3) {
    console.log(counter);
    counter++;
  }
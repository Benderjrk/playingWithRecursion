function factorial(num) {
  // building up the call stack until the base case is satisfied
  if(num === 1 ) {
    return num;
  } else {
    //return 4
    //run with 3 return 3
    //run with 2 return 2
    //run with 1 return 1
    //one is returned above
    //because of the stack 1 returns to the last stack
    //2 * 1 = 2 is popped off the stack
    //3 * 2 = 6 is popped off the stack
    //4 * 6 = 24
    //magic
    return num * factorial(num - 1);
  }
}

console.log(factorial(4));
console.log(factorial(3));

//Factorial (!)
// 4! = 4 * 3 * 2 * 1 = 24

// 3! = 3 * 2 * 1 = 6

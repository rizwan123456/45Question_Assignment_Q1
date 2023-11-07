/* Exercise 22 */
/* Problem Defenation:
 Intentional Error: If you haven’t received an array index error in one of your programs yet,
  try to make one happen. Change an index in one of your programs to produce an index error.
   Make sure you correct the error before closing the program.
*/
var numbers = [1, 2, 3, 4, 5];
// Intentionally accessing an invalid index
console.log(numbers[10]); // This will produce an index error
// Correcting the error
console.log(numbers[2]); // Accessing a valid index
// Closing the program
console.log("Program finished successfully.");

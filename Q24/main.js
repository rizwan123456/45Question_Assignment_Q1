/* Problem Defenation:
             More Conditional Tests: You don’t have to limit the number of tests you create to 10.
             If you want to try more comparisons, write more tests. Have at least one True and
             one False result for each of the following:
              • Tests for equality and inequality with strings
              • Tests using the lower case function
              • Numerical tests involving equality and inequality, greater than and less than,
                greater than or equal to, and less than or equal to
              • Tests using "and" and "or" operators
              • Test whether an item is in a array
              • Test whether an item is not in a array
          */
/* Solution of Problem */
var string1 = 'hello';
var string2 = 'world';
var number1 = 5;
var number2 = 10;
var array = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Is string1 equal to string2? I predict False.");
console.log(string1 === string2);
console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 !== string2);
// Tests using the lowercase function
console.log("Is string1 in lowercase equal to 'hello'? I predict True.");
console.log(string1.toLowerCase() === 'hello');
console.log("Is string2 in lowercase not equal to 'WORLD'? I predict True.");
console.log(string2.toLowerCase() !== 'WORLD');
// Numerical tests
console.log("Is number1 less than number2? I predict True.");
console.log(number1 < number2);
console.log("Is number2 greater than or equal to number1? I predict True.");
console.log(number2 >= number1);
console.log("Is number1 plus number2 equal to 15? I predict True.");
console.log(number1 + number2 === 15);
console.log("Is number2 multiplied by 2 not equal to 20? I predict False.");
console.log(number2 * 2 !== 20);
// Tests using "and" and "or" operators
console.log("Is number1 less than 3 and number2 greater than 8? I predict False.");
console.log(number1 < 3 && number2 > 8);
console.log("Is number1 less than 3 or number2 greater than 8? I predict True.");
console.log(number1 < 3 || number2 > 8);
// Test whether an item is in an array
console.log("Is 3 present in the array? I predict True.");
console.log(array.find(function (elem) { return elem === 3; }));
console.log("Is 6 not present in the array? I predict True.");
console.log(!array.includes(6));

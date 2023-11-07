/* Problem Defenation:
               Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
               Most ordinal numbers end in th, except 1, 2, and 3.
               • Store the numbers 1 through 9 in a array.
               • Loop through the array.
               • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
                 Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a
                 separate line.
           */
/* Solution of Problem */
var numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers4.length; i++) {
    var number4 = numbers4[i];
    if (number4 === 1) {
        console.log("".concat(number4, "st"));
    }
    else if (number4 === 2) {
        console.log("".concat(number4, "nd"));
    }
    else if (number4 === 3) {
        console.log("".concat(number4, "rd"));
    }
    else {
        console.log("".concat(number4, "th"));
    }
}

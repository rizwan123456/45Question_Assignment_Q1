/* Problem Defenation:
              Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
              message that reads I love TypeScript. Make a large shirt and a medium shirt with the default 
              message, and a shirt of any size with a different message.
           */

/* Solution of Problem */

function make_shirt2(size: string = "large", message: string = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}


make_shirt2(); // Large shirt with default message

make_shirt2("medium"); // Medium shirt with default message

make_shirt2("small", "Hello World!"); // Small shirt with a custom message

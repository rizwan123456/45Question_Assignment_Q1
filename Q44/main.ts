/* Problem Defenation:
              Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
              The function should have one parameter that collects as many items as the function call provides,
              and it should print a summary of the sandwich that is being ordered. Call the function three times,
              using a different number of arguments each time.
           */

/* Solution of Problem */

function order_sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    console.log("- Bread");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("- Bread\n");
}

order_sandwich("Turkey", "Lettuce", "Tomato"); // Sandwich with three items
order_sandwich("Ham", "Cheese"); // Sandwich with two items
order_sandwich("Peanut Butter", "Jelly", "Banana", "Honey"); // Sandwich with four items
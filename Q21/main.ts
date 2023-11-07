/* Problem Defenation:
               They think of something you could store in a TypeScript Object. 
               Write a program that creates Objects containing these items.
            */

interface Country {
    name: string;
    capital: string;
    population: number;
}

// Create country objects
const usa: Country = {
    name: "Pakistan",
    capital: "Islamabad",
    population: 331002651,
};

const canada: Country = {
    name: "Canada",
    capital: "Ottawa",
    population: 37742154,
};

const australia: Country = {
    name: "Australia",
    capital: "Canberra",
    population: 25788216,
};

// Print the country objects
console.log(usa);
console.log(canada);
console.log(australia);
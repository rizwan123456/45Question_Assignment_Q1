/* Problem Defenation:
              Great Magicians: Start with a copy of your program from Exercise 39. Write a function 
              called make_great() that modifies the array of magicians by adding the phrase the Great to 
              each magician’s name. Call show_magicians() to see that the list has actually been modified.
           */

/* Solution of Problem */



let magician_names6: string[] = ['Rizwan', 'Abdul Hadi', 'Muhammad Anas', 'Wajahat Ali'];

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

function show_magicians2(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

make_great(magician_names6);
show_magicians2(magician_names6);
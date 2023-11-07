/* Problem Defenation:
            Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
            which prints the name of each magician in the array.  
           */

/* Solution of Problem */

let magician_names: string[] = ['Rizwan', 'Owais', 'Abdul Hadi', 'Muhammad Ali'];

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magician_names);
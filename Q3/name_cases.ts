//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


const per_namee="Rizwan qamar";
console.log("Hello " +  per_namee.toLowerCase() );
console.log("Hello " +  per_namee.toUpperCase() );

//const namee = "coder singh"
const newNamee = per_namee.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")
console.log("Hello " +  newNamee );

export {};
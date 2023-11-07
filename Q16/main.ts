/* Problem Defenation:
More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the 
end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
*/

const guests2: string[] = ["Rizwan", "Danial", "Ali"];
const unableToAttend = "Ali";
const newInvitee = "Asif";

console.log(unableToAttend + " can't make it to the dinner.");

const indexOfUnableToAttend = guests2.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    guests2[indexOfUnableToAttend] = newInvitee;
}

for (const guest of guests2) {
    console.log("Dear " + guest + ", you are cordially invited to dinner. Please join us on Saturday evening.");
}

console.log('------ We found a bigger dinner table ------')

guests2.push('Mubashir')
guests2.unshift('Raza')
guests2.splice(2,0,'Sana')

for (const guest of guests2) {
    console.log("Dear " + guest + ", you are cordially invited to dinner. Please join us on Saturday evening.");
}

export{}
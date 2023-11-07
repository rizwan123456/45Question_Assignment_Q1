/* Problem Defenation:
Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone 
else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of 
your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it 
with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
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

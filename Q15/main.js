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
var guests2 = ["Rizwan", "Danial", "Ali"];
var unableToAttend = "Ali";
var newInvitee = "Asif";
console.log(unableToAttend + " can't make it to the dinner.");
var indexOfUnableToAttend = guests2.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    guests2[indexOfUnableToAttend] = newInvitee;
}
for (var _i = 0, guests2_1 = guests2; _i < guests2_1.length; _i++) {
    var guest = guests2_1[_i];
    console.log("Dear " + guest + ", you are cordially invited to dinner. Please join us on Saturday evening.");
}

"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
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
console.log('------ We found a bigger dinner table ------');
guests2.push('Mubashir');
guests2.unshift('Raza');
guests2.splice(2, 0, 'test');
for (var _a = 0, guests2_2 = guests2; _a < guests2_2.length; _a++) {
    var guest = guests2_2[_a];
    console.log("Dear " + guest + ", you are cordially invited to dinner. Please join us on Saturday evening.");
}

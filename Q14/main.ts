
 /* Problem Defenation:
Guest List: If you could invite anyone, living or deceased, to dinner, 
who would you invite? Make a list that includes at least three people 
you’d like to invite to dinner. Then use your list to print a message to each person, 
inviting them to dinner.               
*/


const guests: string[] = ["Rizwan", "Danial", "Ali"];

for (const guest of guests) {
    console.log("Dear " + guest + ", you are cordially invited to dinner. Please join us on Saturday evening.");
}
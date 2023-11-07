/* Problem Defenation:
Greetings: Start with the array you used in Exercise 11, 
but instead of just printing each person’s name, print a message to them. 
The text of each message should be the same, but each message should be 
personalized with the person’s name.
*/



export{};
const names:String[]=["Rizwan","Hammad","Razi","Hyder"];

for(let i=0;i<names.length;i++)
{
    console.log("Greetings! "+names[i] +" you won the match");
}

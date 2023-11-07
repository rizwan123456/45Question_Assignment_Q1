 /* Problem Defenation:
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle
or a car, and make a list that stores several examples. 
Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”
*/

export{};
const names:String[]=["Honda Accord","KIA Sportage","Hyundai Elentra","Toyota Corola"];

for(let i=0;i<names.length;i++)
{
    console.log("I Would like to own a "+names[i] );
}

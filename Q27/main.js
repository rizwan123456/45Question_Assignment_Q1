/* Problem Defenation:
              Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
               • If the alien is green, print a message that the player earned 5 points.
               • If the alien is yellow, print a message that the player earned 10 points.
               • If the alien is red, print a message that the player earned 15 points.
               • Write three versions of this program, making sure each message is printed for the
                 appropriate color alien.
           */
/* Solution of Problem */
// Version 1: Alien color is green
var alien_color3 = 'green';
if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color3 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
// Version 2: Alien color is yellow
alien_color3 = 'yellow';
if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color3 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
// Version 3: Alien color is red
alien_color3 = 'red';
if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color3 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

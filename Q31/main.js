/* Problem Defenation:
                No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
                • If the list is empty, print the message We need to find some users!
                • Remove all of the usernames from your array, and make sure the correct message is printed.
            */
/* Solution of Problem */
var usernames1 = ['admin', 'Fawwad', 'Owais', 'Hadi', 'Anas'];
if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < usernames1.length; i++) {
        if (usernames1[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(usernames1[i], ", thank you for logging in again."));
        }
    }
}
// Empty the array
usernames1 = [];
if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < usernames1.length; i++) {
        if (usernames1[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(usernames1[i], ", thank you for logging in again."));
        }
    }
}

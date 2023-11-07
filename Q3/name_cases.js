"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
var per_namee = "Rizwan qamar";
console.log("Hello " + per_namee.toLowerCase());
console.log("Hello " + per_namee.toUpperCase());
//const namee = "coder singh"
var newNamee = per_namee.split(" ").map(function (l) { return l[0].toUpperCase() + l.substr(1); }).join(" ");
console.log("Hello " + newNamee);

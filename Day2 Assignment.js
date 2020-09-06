// JavaScript Document

console.log("Assignment Day 2:");

console.log("Question 1: Program to search for a particular character in a string");
var str="LetsUpgrade";
console.log("U is at index " +str.indexOf("U",0) + " in "+ str);

console.log("Question 2: Program to convert minutes to seconds");

var min=60;
var second=min*60;
console.log(min+ " minutes equals to " + second + " seconds");

console.log("Question 3: Program to search for a element in a array of strings");
var arr=["cat","mouse","antilop"];
console.log(arr.indexOf("mouse",0));


console.log("Question 4: Program to display only elements containing 'a' in them from a array");
arr.forEach(function(a) {
console.log(a + " has 'a' at " + a.indexOf("a"));
});

console.log("Question 5: Print an array in reverse order");
console.log(arr.reverse());

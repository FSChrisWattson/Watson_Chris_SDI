/*
 Christopher Watson
 7/11/15
 SDI Section 00
 Day 3 Expressions Homework
 */

alert("Testing the js file");

//In order to tell the computer what to do you ask for input using
// prompt("");
prompt("Name your favorite Sports team.");


var orangeBins = [30, 500, 10002];

//How many oranges did we pick
var totalOranges = orangeBins [0] + orangeBins [1] + orangeBins [2];
console.log(totalOranges + " Oranges were picked in three days.");

//Average number of oranges picked
var averageOranges = totalOranges / 3;
//Instead of 3 put = totalOranges / orangeBins.length;

//length property of arrays
console.log(orangeBins.length);
console.log("The average number of oranges picked is " + averageOranges);


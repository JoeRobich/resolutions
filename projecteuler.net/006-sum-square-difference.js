// http://jsfiddle.net/HVr8v/

// PROBLEM //

/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten
natural numbers and the square of the sum is 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first one
hundred natural numbers and the square of the sum.
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Array.prototype.sum=function(){return this.reduce(function(s,n){return s+n})}
function lambda(f){var a=f.indexOf('=>');return Function(f.substr(0,a).replace(/[(,)]/g,' ').split(' ').filter(String),"return "+f.substr(a+2))}

// ANSWER //

var number = Array.range(1, 101);
var sumOfSquares = number.map(lambda("n => n * n")).sum();
var squareOfSums = Math.pow(number.sum(), 2);

var result = squareOfSums - sumOfSquares;

// 25164150

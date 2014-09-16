#! node

// http://repl.it/ZEY

// PROBLEM //

/*
Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)})}

// ANSWER //

function sumOfPowers(power) {
  var max = Math.pow(9, power) * 10;

  return Array.range(2, max + 1).filter(function(number) {
    return number.toString().split('').map(Number).map(function(n){ return Math.pow(n, power) }).sum() === number;
  }).sum();
}

var result = sumOfPowers(5);

console.log(result);

// 443839

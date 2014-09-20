#! node

// http://repl.it/Z2d

// PROBLEM //

/*
The decimal number, 585 = 1001001001 (binary), is palindromic in both
bases.

Find the sum of all numbers, less than one million, which are palindromic
in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include
leading zeros.)
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
String.prototype.reverse=function(){return this.split('').reverse().join('')}
String.prototype.isPalindrome=function(){return this==this.reverse()}
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)})}

// ANSWER //

function calculateDoubleBasePalindromeSum(max) {
  return Array.range(0, max).filter(function(n) {
    return n.toString().isPalindrome() && n.toString(2).isPalindrome();
  }).sum();
}

var result = calculateDoubleBasePalindromeSum(1000000);

console.log(result);

// 872187

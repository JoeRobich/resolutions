#! node

//

// PROBLEM //

/*
An irrational decimal fraction is created by concatenating the positive
integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If d.n represents the nth digit of the fractional part, find the value of the
following expression.

d.1 × d.10 × d.100 × d.1000 × d.10000 × d.100000 × d.1000000
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
String.prototype.reverse=function(){return this.split('').reverse().join('')}
String.prototype.isPalindrome=function(){return this==this.reverse()}
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)})}

// ANSWER //

function findFractionalDigit(n) {
  if (n < 10)
    return n;

  var index = 10;
  var number = 1;
  while 
}

function calculateDoubleBasePalindromeSum(max) {
  return Array.range(0, max).filter(function(n) {
    return n.toString().isPalindrome() && n.toString(2).isPalindrome();
  }).sum();
}

var result = calculateDoubleBasePalindromeSum(1000000);

console.log(result);

//

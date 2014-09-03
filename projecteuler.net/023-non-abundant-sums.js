#! node --harmony
"use strict";

//

// PROBLEM //

/*
A perfect number is a number for which the sum of its proper divisors is exactly
equal to the number. For example, the sum of the proper divisors of 28 would be
1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n
and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest
number that can be written as the sum of two abundant numbers is 24. By
mathematical analysis, it can be shown that all integers greater than 28123 can
be written as the sum of two abundant numbers. However, this upper limit cannot
be reduced any further by analysis even though it is known that the greatest
number that cannot be expressed as the sum of two abundant numbers is less than
this limit.

Find the sum of all the positive integers which cannot be written as the sum of
two abundant numbers.
*/

// HELPERS //

Number.prototype.factors=function(){var a=[],t=this,l=1,h=t;while(l<h){if(!(t%l)){h=t/l;a.push(l);if(h!=l)a.push(h)}l++}return a}
Number.prototype.divisors=function(){var a=this.factors();a.sort(function(a, b){return a-b});a.pop();return a}

Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a}
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)})}
Array.prototype.compact=function(){return this.filter(function(i){return i})}

function* range(low, high) {
  for (let n = low; n < high; n++)
    yield n;
}

function* seq(array) {
  for (let i = 0; i < array.length; i++)
    yield array[i];
}

// ANSWER //

const limit = 28123;
let numberType = [0,0];
for(let number of range(2, limit)) {
  numberType.push(number.divisors().sum() - number);
}

let abundantNumbers = numberType.reduce(function(na, n, i) {
  if (n > 0)
    na.push(i);
  return na;
}, []);

let notSumOfAbundants = Array.fill(limit, true);

for (let a = 0; a < abundantNumbers.length; a++)
for (let b = 0; b < abundantNumbers.length; b++)
{
  let sum = abundantNumbers[a] + abundantNumbers[b];
  if (sum < limit)
    notSumOfAbundants[sum] = false;
}

let result = notSumOfAbundants.reduce(function(s, f, n) {
  if (n < limit && f)
    s += n;
  return s;
}, 0)

console.log(result);

//

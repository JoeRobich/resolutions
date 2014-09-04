#! node --harmony
"use strict";

// PROBLEM //

/*
A permutation is an ordered arrangement of objects. For example, 3124 is one
possible permutation of the digits 1, 2, 3 and 4. If all of the permutations
are listed numerically or alphabetically, we call it lexicographic order. The
lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5,
6, 7, 8 and 9?
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Number.prototype.factorial=function(){var p=1,n=2;while(n<=this)p*=n++;return p}

// ANSWER //

let target = 1000000;
let numbers = Array.range(0, 10);
let factorials = numbers.map(function(n){return n.factorial()}).reverse();

let result = factorials.map(function(factor) {
  let closestIndex = 0;
  let closestDifference = Number.MAX_VALUE;
  let index = 0;

  while (true) {
    let difference = target - (index * factor);

    if (difference <= 0)
      break;

    if (difference < closestDifference) {
      closestIndex = index;
      closestDifference = difference;
    }

    index++;
  }

  target -= (closestIndex * factor);
  let number = numbers[closestIndex];
  numbers.splice(closestIndex, 1);
  return number;
}).join('');

console.log(result)

// 2659438710

// http://jsfiddle.net/RkpJ8/

// PROBLEM //

/*
2520 is the smallest number that can be divided by each of the numbers from
1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Array.prototype.any=function(f){for(var i=0;i<this.length;)if(f(this[i++]))return !0;return !1}
Array.prototype.last=function(){return this[this.length-1]}
function numericSort(a,b){return a-b}

// ANSWER //

var isMultiple = function(factors, number) {
  return factors.any(function(factor) {
      return number % factor;
  });
}

var findSmallestMultiple = function(factors) {
  factors = factors.sort(numericSort);
  var number = factors.last();

  while (isMultiple(factors, number))
    number += factors.last();

  return number;
}

var result = findSmallestMultiple(Array.range(1, 21));

// 232792560

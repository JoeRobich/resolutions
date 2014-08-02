// http://jsfiddle.net/eHj3F/

// PROBLEM //

/*
If we list all the natural numbers below 10 that are multiples
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Array.prototype.sum=function(){return this.reduce(function(s,n){return s+n})}

function lambda(f){var a=f.indexOf('=>');return Function(f.substr(0,a).replace(/[(,)]/g,' ').split(' ').filter(String),"return "+f.substr(a+2))}

// ANSWER //

var result = Array.range(1, 1000)
  .filter(lambda("n => !(n % 3) || !(n % 5)"))
  .sum();

// 233168

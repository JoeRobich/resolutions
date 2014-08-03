// PROBLEM //

/*
Using the JavaScript language, have the function ArrayAddition(arr) take the
array of numbers stored in arr and return the string true if any combination
of numbers in the array can be added up to equal the largest number in the
array, otherwise return the string false. For example: if arr contains
[4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23.
The array will not be empty, will not contain all the same elements, and may
contain negative numbers.
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Array.prototype.combos=function(){var t=this,r=Array.range,p=Math.pow;return r(1,p(2,t.length)).map(function(n){return r(0,t.length).reduce(function(c,i){if(n&p(2,i))c.push(t[i]);return c},[])})}
Array.prototype.any=function(f){for(var i=0;i<this.length;)if(f(this[i++]))return !0;return !1}
Array.prototype.initial=function(n){n=n||this.length-1;return this.slice(0,n)}
Array.prototype.last=function(){return this[this.length-1]}
Array.prototype.sum=function(){return this.reduce(function(s,n){return s+n})}
function lambda(f){var a=f.indexOf('=>');return Function(f.substr(0,a).replace(/[(,)]/g,' ').split(' ').filter(String),"return "+f.substr(a+2))}

// ANSWER //

function ArrayAdditionI(arr) {
  arr = arr.sort(lambda("a, b => a - b"));
  var max = arr.last();
  return arr.initial().combos().any(lambda("c => c.sum() == " + max));
}

ArrayAdditionI(readline());

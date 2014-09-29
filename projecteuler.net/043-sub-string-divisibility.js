#! node

// http://repl.it/0F7

// PROBLEM //

/*
The number, 1406357289, is a 0 to 9 pandigital number because it is made up of
each of the digits 0 to 9 in some order, but it also has a rather interesting
sub-string divisibility property.

Let d[1] be the 1st digit, d[2] be the 2nd digit, and so on.
In this way, we note the following:

d[2]d[3]d[4]=406 is divisible by 2
d[3]d[4]d[5]=063 is divisible by 3
d[4]d[5]d[6]=635 is divisible by 5
d[5]d[6]d[7]=357 is divisible by 7
d[6]d[7]d[8]=572 is divisible by 11
d[7]d[8]d[9]=728 is divisible by 13
d[8]d[9]d[10]=289 is divisible by 17

Find the sum of all 0 to 9 pandigital numbers with this property.
*/

// HELPERS //

Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)})}

// ANSWER //

function getPandigitalNumbers(arr) {
    arr = arr || [0,1,2,3,4,5,6,7,8,9];
    var permutations = [];
    if (arr.length === 1) {
        return [ arr ];
    }

    for (var i = 0; i <  arr.length; i++) {
        var sub = arr.slice(0, i).concat(arr.slice(i + 1));
        var subPerms = getPandigitalNumbers(sub);
        for (var j = 0; j < subPerms.length; j++) {
            subPerms[j].unshift(arr[i]);
            permutations.push(subPerms[j]);
        }
    }
    return permutations;
}

function getSubNumber(number, index) {
  return parseInt(number.substr(index - 1, 3));
}

var result = getPandigitalNumbers().filter(function(n) {
  n = n.join('');
  return (getSubNumber(n, 2) % 2 === 0 &&
          getSubNumber(n, 3) % 3 === 0 &&
          getSubNumber(n, 4) % 5 === 0 &&
          getSubNumber(n, 5) % 7 === 0 &&
          getSubNumber(n, 6) % 11 === 0 &&
          getSubNumber(n, 7) % 13 === 0 &&
          getSubNumber(n, 8) % 17 === 0);
}).map(function(n) { return parseInt(n.join('')); }).sum();

console.log(result);

// 16695334890

// http://repl.it/XDq

// PROBLEM //

/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains
10 terms. Although it has not been proved yet (Collatz Problem), it is thought
that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Array.prototype.max=function(f){f=f||function(i){return i};return this.reduce(function(m,n){if(f(n)>f(m))return n;return m})}
Number.prototype.isOdd=function(){return this%2}
function lambda(f){var a=f.indexOf('=>');return Function(f.substr(0,a).replace(/[(,)]/g,' ').split(' ').filter(String),"return "+f.substr(a+2))}

// ANSWER //

var sequenceCache = [];
var evenCollatzGenerator = lambda("n => n / 2");
var oddCollatzGenerator = lambda("n => (3 * n) + 1");

function generateCollatzSequence(start) {
  var number = start;
  var sequence = [number];

  while (number != 1) {
    if (number.isOdd())
      number = oddCollatzGenerator(number);
    else
      number = evenCollatzGenerator(number);

    if (sequenceCache[number]) {
      sequence = sequence.concat(sequenceCache[number]);
      break;
    }

    sequence.push(number);
  }

  sequenceCache[start] = sequence;
  return sequence;
}

Array.range(1, 1000001)
  .map(generateCollatzSequence)
  .map(function(s, i) { return {number:i + 1, length:s.length} })
  .max(function(i) { return i.length })
  .number;

// 837799

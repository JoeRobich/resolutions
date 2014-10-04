#! node

// http://repl.it/0cn

// PROBLEM //

/*
The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below
one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime,
contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most
consecutive primes?
*/

// HELPERS //

Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a};
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)},0)}

// ANSWER //

function getPrimeMap(n) {
  var primeMap = Array.fill(n, true);
  primeMap[0]=primeMap[1]=false;

  var sqrtN = Math.sqrt(n);
  for (var i = 2; i < sqrtN; i++)
    if (primeMap[i])
      for (var j = i * i; j < n; j += i)
        primeMap[j] = false;

  return primeMap.reduce(function(p,f,i){
    if (f)
      p[i]=!0;
    return p
  },{});
}

function findLargestConsecutivePrimeSum(max) {
  var primeMap = getPrimeMap(max);
  var primes = Object.keys(primeMap).map(Number);

  var longestSum = 0;
  var mostTerms = 0;

  for (var start = 0; start < primes.length - mostTerms; start++)
  for (var terms = mostTerms + 1; terms < primes.length - start; terms++) {
    var sum = 0;
    for (var i = start; i < start + terms; i++)
      sum += primes[i];

    if (sum > max)
      break;

    if (sum > longestSum && primeMap[sum]) {
      mostTerms = terms;
      longestSum = sum;
    }
  }

  return longestSum;
}

var result = findLargestConsecutivePrimeSum(1000000);

console.log(result);

// 997651

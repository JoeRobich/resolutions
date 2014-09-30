#! node

// http://repl.it/0In

// PROBLEM //

/*
The first two consecutive numbers to have two distinct prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to have four distinct prime factors.
What is the first of these numbers?
*/

// HELPERS //

Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a}
Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Function.memoize=function(f){var m={};return function(){var a=arguments;p=JSON.stringify(a);if(m.hasOwnProperty(p))return m[p];return m[p]=f.apply(null,a)}}
Array.prototype.all=function(f){for(var i=0;i<this.length;)if(!f(this[i++]))return !1;return !0}

// ANSWER //

var getPrimesTo = Function.memoize(function(n) {
  var primeMap = Array.fill(n, true);
  primeMap[0]=primeMap[1]=false;

  var sqrtN = Math.sqrt(n);
  for (var i = 2; i < sqrtN; i++)
    if (primeMap[i])
      for (var j = i * i; j < n; j += i)
        primeMap[j] = false;

  return primeMap.reduce(function(p,f,i){
    if (f)
      p.push(i);
    return p
  },[]);
});

var getPrimeFactors = Function.memoize(function(n) {
  var primes = getPrimesTo(250000);
  var factors = [];
  for (var index = 0; index < primes.length; index++) {
    var prime = primes[index];
    if (n % prime !== 0)
      continue;

    factors.push(prime);
    while (n % prime === 0)
      n = n / prime;

    if (n == 1)
      break;
  }

  return factors;
});

function findConsecutiveNumbersWithEqualsPrimeFactorLength(length) {
  for (var n = 1; true; n++)
    if (Array.range(n, n + length).map(getPrimeFactors).all(function(i){return i.length==length}))
      return n;
}

var result = findConsecutiveNumbersWithEqualsPrimeFactorLength(4);

console.log(result);

// 134043

#! node

// http://repl.it/Z2n

// PROBLEM //

/*
The number 3797 has an interesting property. Being prime itself, it is
possible to continuously remove digits from left to right, and remain
prime at each stage: 3797, 797, 97, and 7. Similarly we can work from
right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from
left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/

// HELPERS //

Array.prototype.fill=function(v){var i=0,a=[];while(i++<this.length)a.push(v);return a}
Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)})}

// ANSWER //

function getPrimeMap(n) {
  var primeMap = new Array(n).fill(true);
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

function calculateTruncatablePrimesSum(min, max) {
  var primeMap = getPrimeMap(max);

  return Object.keys(primeMap).filter(function(p) {
    if (p < min)
      return false;

    var digits = p.toString().split('');
    while (digits.length) {
      if (!primeMap[digits.join('')])
        return false;

      digits.shift();
    }

    digits = p.toString().split('');
    while (digits.length) {
      if (!primeMap[digits.join('')])
        return false;

      digits.pop();
    }

    return true;
  }).map(Number).sum();
}

var result = calculateTruncatablePrimesSum(10, 1000000);

console.log(result);

// 748317

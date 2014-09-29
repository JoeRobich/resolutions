#! node

// http://repl.it/0FU

// PROBLEM //

/*
We shall say that an n-digit number is pandigital if it makes use of all the
digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is
also prime.

What is the largest n-digit pandigital prime that exists?
*/

// HELPERS //

Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a}
Number.isPandigital=function(n){n=n.toString().split('').sort().join('');var i,a=[];for(i=1;i<=n.length;)a.push(i++);return a.join('')==n}
Array.prototype.last=function(){return this[this.length-1]}

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

function findLargestPandigitalPrime(max) {
  return Object.keys(getPrimeMap(max)).filter(Number.isPandigital).map(Number).last();
}

var result = findLargestPandigitalPrime(7654321);

console.log(result);

// 7652413

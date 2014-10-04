#! node

// http://repl.it/0ck

// PROBLEM //

/*
The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases
by 3330, is unusual in two ways: (i) each of the three terms are prime, and,
(ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes,
exhibiting this property, but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the three terms in this
sequence?
*/

// HELPERS //

Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a}
Array.prototype.group=function(f){return this.reduce(function(g,i){var k=f(i);g[k]=g[k]||[];g[k].push(i);return g},{})}
function numericSort(a,b){return a-b}

// ANSWER //

function getPrimesBetween(l, n) {
  var primeMap = Array.fill(n, true);
  primeMap[0]=primeMap[1]=false;

  var sqrtN = Math.sqrt(n);
  for (var i = 2; i < sqrtN; i++)
    if (primeMap[i])
      for (var j = i * i; j < n; j += i)
        primeMap[j] = false;

  return primeMap.reduce(function(p,f,i){
    if (f && i >= l)
      p.push(i);
    return p
  },[]);
};

function findPrimePermutation(ignore) {
  var primeGroups = getPrimesBetween(1000, 9999).group(function(i){return i.toString().split('').sort().join('')});
  var potentialMatches = Object.keys(primeGroups).filter(function(k){return primeGroups[k].length >= 3});
  for (var k = 0; k < potentialMatches.length; k++) {
    var key = potentialMatches[k];
    if (key == ignore)
      continue;

    var primeGroup = primeGroups[key].sort(numericSort);
    for (var i = 0; i < primeGroup.length - 2; i++) {
      for (var j = i + 1; j < primeGroup.length - 1; j++) {
        var difference = primeGroup[j] - primeGroup[i];
        var next = primeGroup[j] + difference;
        if (primeGroup.indexOf(next) != -1)
          return [primeGroup[i], primeGroup[j], next].join('');
      }
    }
  }
}

var result = findPrimePermutation("1478");

console.log(result);

// 296962999629

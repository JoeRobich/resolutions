#! node

// http://repl.it/Z2X

// PROBLEM //

/*
The fraction 49/98 is a curious fraction, as an inexperienced mathematician
in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which
is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less
than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms,
find the value of the denominator.
*/

// HELPERS //

Array.prototype.max=function(f){f=f||function(i){return i};return this.reduce(function(m,n){if(f(n)>f(m))return n;return m})}
Number.prototype.factors=function(){var a=[],t=this,l=1,h=t;while(l<h){if(!(t%l)){h=t/l;a.push(l);if(h!=l)a.push(h)}l++}return a}
Array.prototype.intersect=function(v){return this.filter(v.contains.bind(v))}
Array.prototype.contains=function(i){return this.indexOf(i)!=-1}

// ANSWER //

function isDigitCancelingFraction(numerator, denominator) {
  var value = numerator / denominator;

  var numeratorParts = numerator.toString().split('').map(Number);
  var denominatorParts = denominator.toString().split('').map(Number);

  if (numeratorParts[0] == denominatorParts[0] && numeratorParts[0] && denominatorParts[0])
    return numeratorParts[1] / denominatorParts[1] == value;
  else if (numeratorParts[1] == denominatorParts[0] && numeratorParts[1] && denominatorParts[0])
    return numeratorParts[0] / denominatorParts[1] == value;
  else if (numeratorParts[0] == denominatorParts[1] && numeratorParts[0] && denominatorParts[1])
    return numeratorParts[1] / denominatorParts[0] == value;
  else if (numeratorParts[1] == denominatorParts[1] && numeratorParts[1] && denominatorParts[1])
    return numeratorParts[0] / denominatorParts[0] == value;

  return false;
}

function calculateCancelingFractionCommonDenominator() {
  var numeratorProduct = 1;
  var denominatorProduct = 1;

  for (var numerator = 10; numerator < 100; numerator++)
  for (var denominator = numerator + 1; denominator < 100; denominator++) {
    if (isDigitCancelingFraction(numerator, denominator)) {
      numeratorProduct *= numerator;
      denominatorProduct *= denominator;
    }
  }

  var greatestCommonFactor = numeratorProduct.factors().intersect(denominatorProduct.factors()).max();

  return denominatorProduct / greatestCommonFactor;
}

var result = calculateCancelingFractionCommonDenominator();

console.log(result);

// 100

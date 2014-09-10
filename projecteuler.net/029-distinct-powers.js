#! node
"use strict";

// PROBLEM //

/*
Consider all integer combinations of a^b for 2 ≤ a ≤ 5 and 2 ≤ b ≤ 5:

2^2=4, 2^3=8, 2^4=16, 2^5=32
3^2=9, 3^3=27, 3^4=81, 3^5=243
4^2=16, 4^3=64, 4^4=256, 4^5=1024
5^2=25, 5^3=125, 5^4=625, 5^5=3125
If they are then placed in numerical order, with any repeats removed, we get the
following sequence of 15 distinct terms:

4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125

How many distinct terms are in the sequence generated by ab for 2 ≤ a ≤ 100 and
2 ≤ b ≤ 100?
*/

// HELPERS //

Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a}
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)})}

// ANSWER //

function add(a, b) {
  var aDigits = a.split('').map(Number).reverse();
  var bDigits = b.split('').map(Number).reverse();
  var length = Math.max(aDigits.length, bDigits.length);

  var sumDigits = [];
  var carry = 0;
  for (var index = 0; index < length; index++) {
    var aDigit = aDigits[index] || 0;
    var bDigit = bDigits[index] || 0;

    var sum = aDigit + bDigit + carry;

    sumDigits.push(sum % 10);
    carry = sum / 10 | 0;
  }

  if (carry)
    sumDigits.push(carry);

  return sumDigits.reverse().join('');
}

function multiply(a, b) {
  var aDigits = a.split('').map(Number).reverse();
  var bDigits = b.split('').map(Number).reverse();

  return bDigits.reduce(function(products, bDigit, index) {
    var productDigits = Array.fill(index, 0);
    var carry = 0;
    aDigits.forEach(function(aDigit) {
        var product = aDigit * bDigit + carry;
        productDigits.push(product % 10);
        carry = product / 10 | 0;
    });

    if (carry)
      productDigits.push(carry);

    products.push(productDigits.reverse().join(''));
    return products;
  },[]).reduce(add);
}

function power(a, b) {
  a = a.toString();

  var prod = a;
  while (--b)
    prod = multiply(prod, a);

  return prod;
}

function countDistinct(max) {
  var products = {};

  for (var a = 2; a <= max; a++)
  for (var b = 2; b <= max; b++)
    products[power(a, b)] = 1;

  return Object.keys(products).length;
}

var result = countDistinct(100);

console.log(result);

// 9183
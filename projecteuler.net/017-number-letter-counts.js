// http://repl.it/XHh

// PROBLEM //

/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five,
then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in
words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20
letters. The use of "and" when writing out numbers is in compliance with
British usage.
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Array.prototype.pluck=function(n){return this.map(function(i){return i[n]})}
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)})}

// ANSWER //

var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function toWords(number) {
  var w = "";

  if (number < 0 || number > 1000)
    throw new Error("toWords only supports numbers from 0 to 1000");

  if (number < 10)
    return digits[number];

  if (number < 20)
    return teens[number - 10];

  if (number < 100) {
    w = tens[number / 10 | 0];

    if (number % 10)
      w += "-" + digits[number % 10];

    return w;
  }

  if (number < 1000) {
    w = digits[number / 100 | 0] + " hundred";

    if (number % 100)
      w += " and " + toWords(number % 100);

    return w;
  }

  return digits[number / 1000 | 0] + " thousand";
}

function removeSpaces(string) {
  return string.replace(/[ \-]/g, "");
}

Array.range(1, 1001).map(toWords).map(removeSpaces).pluck("length").sum();

// 21124

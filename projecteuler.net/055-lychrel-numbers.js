#! node

// http://repl.it/0gO

// PROBLEM //

/*
If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.

Not all numbers produce palindromes so quickly. For example,

349 + 943 = 1292,
1292 + 2921 = 4213
4213 + 3124 = 7337

That is, 349 took three iterations to arrive at a palindrome.

Although no one has proved it yet, it is thought that some numbers, like 196,
never produce a palindrome. A number that never forms a palindrome through the
reverse and add process is called a Lychrel number. Due to the theoretical
nature of these numbers, and for the purpose of this problem, we shall assume
that a number is Lychrel until proven otherwise. In addition you are given that
for every number below ten-thousand, it will either (i) become a palindrome in
less than fifty iterations, or, (ii) no one, with all the computing power that
exists, has managed so far to map it to a palindrome. In fact, 10677 is the
first number to be shown to require over fifty iterations before producing a
palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).

Surprisingly, there are palindromic numbers that are themselves Lychrel numbers;
the first example is 4994.

How many Lychrel numbers are there below ten-thousand?

NOTE: Wording was modified slightly on 24 April 2007 to emphasise the
theoretical nature of Lychrel numbers.
*/

// HELPERS //

Function.memoize=function(f){var m={};return function(){var a=arguments;p=JSON.stringify(a);if(m.hasOwnProperty(p))return m[p];return m[p]=f.apply(null,a)}}
Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
String.reverse=Function.memoize(function(s){return s.split('').reverse().join('')})
String.prototype.reverse=function(){return String.reverse(this)}
String.isPalindrome=Function.memoize(function(s){return s==s.reverse()})
String.prototype.isPalindrome=function(){return String.isPalindrome(this)}
Number.prototype.reverse=function(){return Number(this.toString().reverse())}
Number.prototype.isPalindrome=function(){return this.toString().isPalindrome()}

// ANSWER //

function countLychrelNumbersUnder(max) {
  return Array.range(1, max + 1).filter(function(n) {
    for (var i = 0; i < 50; i++) {
      n = n + n.reverse();
      if (n.isPalindrome())
        return false;
    }

    return true;
  }).length;
}

var result = countLychrelNumbersUnder(10000);

console.log(result);

// 249

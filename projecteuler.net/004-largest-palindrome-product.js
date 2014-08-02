// http://jsfiddle.net/t3NHM/

// PROBLEM //

/*
A palindromic number reads the same both ways. The largest palindrome
made from the product of two 2-digit numbers is 9009 = 91 * 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
String.prototype.reverse=function(){return this.split('').reverse().join('')}
String.prototype.isPalindrome=function(){return this==this.reverse()}

// ANSWER //

var findLargestPalindromeProduct = function(start, end) {
    return Array.range(start, end).reduce(function(largest, number1) {
        return Array.range(number1, end).reduce(function(largest, number2) {
            var product = number1 * number2;
            if (product.toString().isPalindrome() && product > largest)
                largest = product;
            return largest;
        }, largest);
    }, 0);
}

var result = findLargestPalindromeProduct(100, 1000);

// 906609

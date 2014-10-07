// http://jsfiddle.net/5h02yaoq/

// PROBLEM //

/*
A googol (10^100) is a massive number: one followed by one-hundred zeros; 100100
is almost unimaginably large: one followed by two-hundred zeros. Despite their
size, the sum of the digits in each number is only 1.

Considering natural numbers of the form, ab, where a, b < 100, what is the
maximum digital sum?
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)},0)}
Array.prototype.max=function(f){f=f||function(i){return i};return this.reduce(function(m,n){if(f(n)>f(m))return n;return m})}

// ANSWER //

var range = Array.range(1, 100);
var result = range.map(function(a) {
    return range.map(function(b) {
        return new BigNumber(a).pow(b).toString(10).split('').map(Number).sum();
    }).max();
}).max();

document.getElementById("log").innerText = result;

// 972

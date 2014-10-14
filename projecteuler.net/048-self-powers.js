// http://repl.it/1WY

// PROBLEM //

/*
The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.
*/

// HELPERS //

function request(u){return new Promise(function(s,f){var x=new XMLHttpRequest();x.open("GET",u,!0);x.onload=function(e){if(x.readyState==4)if(x.status==200)s(eval.call(0,x.responseText));else f(x.statusText)};x.onerror=function(e){f(x.statusText)};x.send()})}
Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}

// ANSWER //

function main() {
  return Array.range(1, 1001)
    .map(function(n){return new BigNumber(n).pow(n)})
    .reduce(function(s,n){return s.plus(n)})
    .toString(10)
    .substr(-10);
}

// RUNNER //

Promise.all([
  request("http://cdnjs.cloudflare.com/ajax/libs/bignumber.js/1.4.1/bignumber.min.js")
]).then(main).then(console.log);
console.log("Running...");

// 9110846700

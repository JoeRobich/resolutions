// PROBLEM //

/*
Have the function SimpleAdding(num) add up all the numbers from 1 to num.
For the test cases, the parameter num will be any number from 1 to 1000. 
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Array.prototype.sum=function(){return this.reduce(function(s,n){return s+n})}

// ANSWER //

function SimpleAdding(num) {
  return Array.range(0, ++num).sum();
}

SimpleAdding(readline());

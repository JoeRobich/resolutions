// PROBLEM //

/*
Have the function SimpleMode(arr) take the array of numbers stored in arr
and return the number that appears most frequently (the mode). For example:
if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more
than one mode return the one that appeared in the array first (ie.
[5, 10, 10, 6, 5] should return 5 because it appeared first). If there is
no mode return -1. The array will not be empty. 
*/


// HELPERS //

Array.prototype.countBy=function(f){return this.reduce(function(m,i){var k=f(i);m[k]=~~m[k]+1;return m},{})}

Object.prototype.keys=function(){var r=[];for(var k in this)if(this.hasOwnProperty(k))r.push(k);return r}
Object.prototype.kvps=function(){var t=this;return t.keys().map(function(k){return {key:k,value:t[k]}})}

// ANSWER //

function SimpleMode(arr) {
  var mode = arr.countBy(Number).kvps().reduce(function(m, kvp) {
    if (!m || kvp.value > m.value)
      return kvp;
    return m;
  }, { value: 1 }).key;
  return mode || -1;
}

SimpleMode(readline());

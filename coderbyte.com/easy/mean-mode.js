// PROBLEM //

/*
Have the function MeanMode(arr) take the array of numbers stored in arr and
return 1 if the mode equals the mean, 0 if they don't equal each other
(ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
The array will not be empty, will only contain positive integers, and will not
contain more than one mode. 
*/

// HELPERS //

Array.prototype.countBy=function(f){return this.reduce(function(m,i){var k=f(i);m[k]=~~m[k]+1;return m},{})}
Array.prototype.sum=function(){return this.reduce(function(s,n){return s+n})}

Object.prototype.keys=function(){var r=[];for(var k in this)if(this.hasOwnProperty(k))r.push(k);return r}
Object.prototype.kvps=function(){var t=this;return t.keys().map(function(k){return {key:k,value:t[k]}})}

// ANSWER //

function MeanMode(arr) {
  var mean = arr.sum() / arr.length;
  var mode = arr.countBy(Number).kvps().reduce(function(m,kvp) {
    if (!m || kvp.value > m.value)
      return kvp;
    return m;
  }).key;
  return mode == mean ? 1 : 0;
}

MeanMode(readline());

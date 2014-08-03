// PROBLEM //

/*
Using the JavaScript language, have the function LetterCountI(str) take
the str parameter being passed and return the first word with the
greatest number of repeated letters. For example: "Today, is the
greatest day ever!" should return greatest because it has 2 e's (and 2
t's) and it comes before ever which also has 2 e's. If there are no words
with repeating letters return -1. Words will be separated by spaces.
*/

// HELPERS //

Array.prototype.max=function(){return this.reduce(function(m,n){if(n>m)return n;return m})}
Array.prototype.countBy=function(f){return this.reduce(function(m,i){var k=f(i);m[k]=~~m[k]+1;return m},{})}
Object.prototype.keys=function(){var r=[];for(var k in this)if(this.hasOwnProperty(k))r.push(k);return r}
Object.prototype.vals=function(){var t=this;return t.keys().map(function(k){return t[k]})}

// ANSWER //

function LetterCount(str) {
    return str.replace(/[^ a-zA-Z]/g, '').split(' ').reduce(function(rw, w) {
      var r = w.toUpperCase().split('').countBy(String).vals().max();
      return (r > rw.reps) ? {reps:r, word:w} : rw;
    }, {reps:1, word:-1}).word;
}

LetterCount(readline());

// PROBLEM //

/*
Have the function ArithGeo(arr) take the array of numbers stored in arr
and return the string "Arithmetic" if the sequence follows an arithmetic
pattern or return "Geometric" if it follows a geometric pattern. If the
sequence doesn't follow either pattern return -1. An arithmetic sequence
is one where the difference between each of the numbers is consistent,
where as in a geometric sequence, each term after the first is multiplied
by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and
Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as
parameters, 0 will not be entered, and no array will contain all the same
elements.
*/

// HELPERS //

Array.prototype.all=function(f){for(var i=0;i<this.length;)if(!f(this[i++]))return !1;return !0}
function lambda(f){var a=f.indexOf('=>');return Function(f.substr(0,a).replace(/[(,)]/g,' ').split(' ').filter(String),"return "+f.substr(a+2))}

// ANSWER //

function ArithGeo(arr) {
  var diffs = [];
  var quots = [];

  arr.reduce(function(a, b) {
    if (!isNaN(a)) {
      diffs.push(b - a);
      quots.push(b / a);
    }
    return b;
  }, NaN);

  if (diffs.all(lambda("n => n == " + diffs[0])))
    return "Arithmetic";

  if (quots.all(lambda("n => n == " + quots[0])))
    return "Geometric";

  return -1;
}

ArithGeo(readline());

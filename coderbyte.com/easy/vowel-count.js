// PROBLEM //

/*
Have the function VowelCount(str) take the str string parameter being
passed and return the number of vowels the string contains (ie.
"All cows eat grass" would return 5). Do not count y as a vowel for
this challenge.
*/

// HELPERS //

Array.prototype.sum=function(){return this.reduce(function(s,n){return s+n})}

// ANSWER //

var isVowel = function(chr) {
  return 'aeiou'.indexOf(chr) != -1;
}

function VowelCount(str) {
  return str.split('')
    .map(function(chr) {
      return isVowel(chr) ? 1 : 0;
    }).sum();
}

VowelCount(readline());

// PROBLEM //

/*
Have the function LongestWord(sen) take the sen parameter being passed
and return the largest word in the string. If there are two or more
words that are the same length, return the first word from the string
with that length. Ignore punctuation and assume sen will not be empty.
*/

// ANSWER //

function LongestWord(sen) {
  return sen.replace(/[^a-zA-Z ]/g;, '')
    .split(' ')
    .filter(String)
    .reduce(function(longest, word) {
      if (word.length > longest.length)
        return word;
      return longest;
    }, '');
}

LongestWord(readline());

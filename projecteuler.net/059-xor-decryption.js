// http://repl.it/1nX

// PROBLEM //

/*
Each character on a computer is assigned a unique code and the preferred
standard is ASCII (American Standard Code for Information Interchange). For
example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.

A modern encryption method is to take a text file, convert the bytes to ASCII,
then XOR each byte with a given value, taken from a secret key. The advantage
with the XOR function is that using the same encryption key on the cipher text,
restores the plain text; for example, 65 XOR 42 = 107, then 107 XOR 42 = 65.

For unbreakable encryption, the key is the same length as the plain text
message, and the key is made up of random bytes. The user would keep the
encrypted message and the encryption key in different locations, and without
both "halves", it is impossible to decrypt the message.

Unfortunately, this method is impractical for most users, so the modified method
is to use a password as a key. If the password is shorter than the message,
which is likely, the key is repeated cyclically throughout the message. The
balance for this method is using a sufficiently long password key for security,
but short enough to be memorable.

Your task has been made easy, as the encryption key consists of three lower case
characters. Using cipher.txt (right click and 'Save Link/Target As...'), a file
containing the encrypted ASCII codes, and the knowledge that the plain text must
contain common English words, decrypt the message and find the sum of the ASCII
values in the original text.
*/

// HELPERS //

function request(u){return new Promise(function(s,f){var x=new XMLHttpRequest();x.open("GET",u,!0);x.onload=function(e){if(x.readyState==4)if(x.status==200)s(eval.call(0,x.responseText));else f(x.statusText)};x.onerror=function(e){f(x.statusText)};x.send()})}
Array.prototype.all=function(f){for(var i=0;i<this.length;)if(!f(this[i++]))return !1;return !0}
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)},0)}

// ANSWER //

var letters = "abcdefghijklmnopqrstuvwxyz";

function convert(cipher, password) {
  return cipher.map(function(c,i) {
    return (c ^ password[i % password.length]) % 256;
  });
}

function findCipherSum(cipher) {
  for (var index1 = 0; index1 < letters.length; index1++)
  for (var index2 = 0; index2 < letters.length; index2++)
  for (var index3 = 0; index3 < letters.length; index3++) {
    var password = [
      letters.charCodeAt(index1),
      letters.charCodeAt(index2),
      letters.charCodeAt(index3)
    ];
    var text = convert(cipher, password);

    if (text.all(function(c){return 31 < c && c < 127 && c != 96}))
      return text.sum();
  }
}

function main() {
  return findCipherSum(cipher);
}

// RUNNER //

Promise.all([
  request("https://rawgit.com/JoeRobich/resolutions/master/projecteuler.net/059-cipher.js")
]).then(main).then(console.log);
console.log("Running...");

// 107359

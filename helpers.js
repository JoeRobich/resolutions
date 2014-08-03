/**
* Wraps a boolean returning function which negates its results.
*/
Function.prototype.not = function() {
  var _this = this;
  return function() {
    return !_this.apply(this, arguments);
  };
};

/**
* Creates an array of numbers from start to end - 1.
*/
Array.range = function(start, end) {
    var numbers = [];
    for (var number = start; number < end; number++)
      numbers.push(number);
    return numbers;
};

/**
* Creates an array containing all the combinations of items.
*/
Array.prototype.combos = function() {
  var _this = this;
  return Array.range(1, Math.pow(2, _this.length)).map(function(test) {
    return Array.range(0, _this.length).reduce(function(combos, index) {
      if (test & Math.pow(2, index))
        combos.push(_this[index]);
      return combos;
    }, []);
  });
};

/**
* Creates a new array without any falsey values.
*/
Array.prototype.compact = function() {
  return this.filter(function(item) {
    return item;
  });
};

/**
* Returns true if the item is within the array.
*/
Array.prototype.contains = function(item) {
  return this.indexOf(item) != -1;
};

/**
* Returns the sum of all the items.
*/
Array.prototype.sum = function() {
  return this.reduce(function(sum, number) {
    return sum + number;
  });
};

/**
* Returns the first item that satisfies the predicate.
*/
Array.prototype.find = function(predicate) {
  for (var index = 0; index < this.length; index++) {
    var item = this[index];
    if (predicate(item))
      return item;
  }
};

/**
* Returns true if any item satisfies the predicate.
*/
Array.prototype.any = function(predicate) {
  for (var index = 0; index < this.length; index++)
    if (predicate(this[i]))
      return true;
  return false;
};

/**
* Returns true if all the items satisfy the predicate.
*/
Array.prototype.all = function(predicate) {
  for (var index = 0; index < this.length; index++)
    if (!predicate(this[index]))
      return false;
  return true;
};

/**
* Returns the item with the largest value.
*/
Array.prototype.max = function() {
  return this.reduce(function(max, number) {
    if (number > max)
      return number;
    return max;
  });
};

/**
* Returns the item with the smallest value.
*/
Array.prototype.min = function() {
  return this.reduce(function(min, number) {
    if (number < min)
      return number;
    return min;
  });
};

/**
* Returns an array of the specified attribute from each item.
*/
Array.prototype.pluck = function(name) {
  return this.select(function(item) {
    return item[name];
  });
};

/**
* Returns the first item.
*/
Array.prototype.first = function() {
  return this[0];
};

/**
* Returns an array of the first n item. n defaults to length - 1.
*/
Array.prototype.initial = function(n) {
  n = n || this.length - 1;
  return this.slice(0, n);
};

/**
* Returns the last item.
*/
Array.prototype.last = function() {
  return this[this.length - 1];
};

/**
* Returns the last n items. n defaults to length - 1.
*/
Array.prototype.rest = function(n) {
  n = n || this.length - 1;
  return this.slice(this.length - n);
};

/**
* Returns a shallow copy of the array.
*/
Array.prototype.clone = function() {
  return this.slice(0);
};

/**
* Returns an array of only the unique items.
*/
Array.prototype.unique = function() {
  var _this = this;
  return _this.reduce(function(unique, item) {
    if (!_this.contains(item))
      unique.push(item);
    return unique;
  }, []);
};

/**
* Returns an array without the items in the specified array.
*/
Array.prototype.without = function(values) {
  var _this = this;
  return _this.filter(function(item) {
    return !values.contains(item);
  });
};

/**
* Returns an array of the items present in both arrays.
*/
Array.prototype.intersect = function(values) {
  return this.filter(function(item) {
    return values.contains(item)
  });
};

/**
* Returns an object where the keys are the values returned when applying the
* specified function to the items in the array and the values are the number of
* occurance of that key.
*/
Array.prototype.countBy = function(func) {
  return this.reduce(function(counts, item) {
    var key = func(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
};

/**
* Returns an array of the keys on this object.
*/
Object.prototype.keys = function() {
  var keys = [];
  for (var key in this)
    if (this.hasOwnProperty(key))
      keys.push(key);
  return keys;
};

/**
* Returns an array of the values in this object.
*/
Object.prototype.vals = function() {
  var _this = this;
  return _this.keys().map(function(key) {
    return _this[key];
  });
};

/**
* Returns an array of the characters in this string.
*/
String.prototype.toArray = function() {
  return this.split('');
};

/**
* Returns this string backwards.
*/
String.prototype.reverse = function() {
  return this.toArray().reverse().join('');
};

/**
* Returns true if this string is the same backwards as forwards.
*/
String.prototype.isPalindrome = function() {
  return this == this.reverse();
};

/**
* Returns true if this number is prime.
*/
Number.prototype.isPrime = function() {
  for (var number = 2; number < this; number++)
    if (!(this % number))
      return false;
  return true;
};

/**
* Returns a function equivalent of the specified lambda.
*/
function lambda(func) {
  var index = func.indexOf('=>');
  var params = func.substr(0, index).replace(/[(,)]/g,' ').split(' ').compact();
  var body = func.substr(index + 2);
  return Function(params, "return " + body);
};

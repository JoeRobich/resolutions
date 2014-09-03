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
* Wraps a function in an argument collector that invokes the original
* when enough arguments have been supplied.
*/
Function.prototype.curry = function() {
  var _this = this;
  function innerCurry(curriedArgs) {
    return function() {
      var args = curriedArgs.concat(Array.prototype.slice.call(arguments));
      if (args.length< _this.length)
        return innerCurry(args)
      else
        return _this.apply(this, args);
    };
  };
  return innerCurry([].slice.call(arguments));
}

/**
* Wraps a function to repeatedly invoke the function's result until a
* non-function is returned.
*/
Function.prototype.trampoline = function() {
  var _this = this;
  return function() {
    var result = _this.apply(this, arguments);
    while (typeof r === 'function')
      result = result();
    return result;
  };
};

/**
* Returns an array of numbers from start to end - 1.
*/
Array.range = function(start, end) {
    var numbers = [];
    for (var number = start; number < end; number++)
      numbers.push(number);
    return numbers;
};

/**
* Returns a new array of the specified length populated with the specified value.
*/
Array.fill = function(size, value) {
  var array = [];

  for (var index = 0; index < size; index++)
    array.push(value);

  return array;
};

/**
* Returns a new array of the same length populated with the specified value.
*/
Array.prototype.fill = function(value) {
  var array = [];

  for (var index = 0; index < this.length; index++)
    array.push(value);

  return array;
}

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
* Returns a new array without any falsey values.
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
Array.prototype.sum = function(func) {
  func = func || function(i) { return i; };
  return this.reduce(function(sum, number) {
    return sum + func(number);
  });
};

/**
* Returns the product of all the items.
*/
Array.prototype.product = function(func) {
  func = func || function(i) { return i; };
  return this.reduce(function(product, number) {
    return product * func(number);
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
    if (predicate(this[index]))
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
Array.prototype.max = function(func) {
  func = func || function(i) { return i; };
  return this.reduce(function(max, number) {
    if (func(number) > func(max))
      return number;
    return max;
  });
};

/**
* Returns the item with the smallest value.
*/
Array.prototype.min = function(func) {
  func = func || function(i) { return i; };
  return this.reduce(function(min, number) {
    if (func(number) < func(min))
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
* Returns an array of arrays of the items at each corresponding position.
*/
Array.prototype.zip = function() {
  var array = [];
  var length = this.pluck('length').max();

  for (var index = 0; index < length; index++)
    array.push(this.pluck(index));

  return array;
}

/**
* Returns an array of arrays of items of the specified size.
*/
Array.prototype.chunk = function(size) {
  var array = [];
  var index = 0;

  while (index < this.length) {
    array.push(this.slice(index, index + size));
    index += size;
  }

  return array;
};

/**
* Returns a new array containing all the elements of all arrays contained within this array.
*/
Array.prototype.flatten = function() {
  return this.reduce(function(array, item) {
    if(Array.isArray(item))
      return array.concat(item.flatten());

    array.push(item);
    return array;
  },[]);
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
* Returns an array of the items that match the specified object.
*/
Array.prototype.matches = function(match) {
  return this.filter(function(item) {
    return item.isMatch(match);
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
* Returns an array of the key-value pairs in this object.
*/
Object.prototype.kvps = function() {
  var _this = this;
  return _this.keys().map(function(key) {
    return { key : key, value : _this[key] };
  });
};

/**
* Returns true if this object's properties match the specified object.
*/
Object.prototype.isMatch = function(match) {
    for (var key in match) {
      if (match.hasOwnProperty(k)) {
        if (match[k] instanceof Object) {
          if (!this[k].isMatch(match[k]))
            return false;
        } else if (this[k] !== match[k])
          return false;
      }
    }

    return true;
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
* Returns a string where {n} is replaced by the argument at index n.
*/
String.format = function(template) {
  var values = Array.prototype.slice.call(arguments, 1);
  for (var index = 0; index < values.length; i++)
    template = template.replace(new RegExp("\\{" + i + "\\}", "g"), a[i]);
  return templates;
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
* Returns true if this number is odd.
*/
Number.prototype.isOdd = function() {
  return this % 2;
};

/**
* Returns true if this number is even.
*/
Number.prototype.isEven = function() {
  return !(this % 2);
};

/**
* Returns an array of all the factors of this number.
*/
Number.prototype.factors = function() {
  var array = [];
  var low = 1;
  var high = this;

  while (low < high) {
    if (!(this % low)) {
      high = this / low;
      array.push(low);

      if(high != low)
        array.push(high);
    }

    low++;
  }

  return array;
};

/**
* Returns the factorial of this number.
*/
Number.prototype.factorial = function() {
  var product = 1;

  for (var number = 2; number <= this; number++)
    product  *= number;

  return product;
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

/**
* For use in sorting arrays of numbers.
*/
function numericSort(a, b)
{
  return a - b;
}

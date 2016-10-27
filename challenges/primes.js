/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE

function isDivisibleBy(factor, num) {
  if (num % factor === 0) {
    return true;
  }
  return false;
}

function isPrime(num) {
  for (var idx = 2; idx < num; idx ++) {
    if (isDivisibleBy(idx, num)) {
      return false;
    }
  }
  return true;
}

function primes(max) {
  var primeNums = [];
  for (var idx = 2; idx <= max; idx++) {
    if (isPrime(idx)) {
      primeNums.push(idx);
    }
  }
  return primeNums;
}
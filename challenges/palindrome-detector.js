/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE

function isPalindrome(word) {
  var wordsToCheck = word.toLowerCase().split(' ').join('');
  var fromBack = wordsToCheck.length - 1;
  for (var idx = 0; idx < Math.floor(wordsToCheck.length / 2); idx++) {
    if (wordsToCheck[idx] !== wordsToCheck[fromBack]) {
      return false;
    }
    fromBack--;
  }
  return true;
}

isPalindrome('racecar');
isPalindrome('Pull up if I pull up');
/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE

function bottlesOfBeerSong() {
  var bottlesOfBeer = 3;
  while (bottlesOfBeer >= 0) {
    if (bottlesOfBeer <= 1) {
      bottlesOfBeer === 1 ? console.log(bottlesOfBeer + " bottle of beer on the wall,\n" + bottlesOfBeer + " bottle of beer!\nTake one down and pass it around,\n" + (bottlesOfBeer - 1) + " bottles of beer on the wall!") : console.log("No more bottles of beer on the wall,\nNo more bottles of beer!\nGo to the store and get some more,\n99 bottles of beer on the wall!");
    } else if (bottlesOfBeer === 2) {
      console.log(bottlesOfBeer + " bottles of beer on the wall,\n" + bottlesOfBeer + " bottles of beer!\nTake one down and pass it around,\n" + (bottlesOfBeer - 1) + " bottle of beer on the wall!");
    } else {
          console.log(bottlesOfBeer + " bottles of beer on the wall,\n" + bottlesOfBeer + " bottles of beer!\nTake one down and pass it around,\n" + (bottlesOfBeer - 1) + " bottles of beer on the wall!");
    }
    bottlesOfBeer--;
  }
}

bottlesOfBeerSong();
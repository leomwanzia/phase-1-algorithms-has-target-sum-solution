  function hasTargetSum(array, target) {
    // Write your algorithm here
    const seenNumbers = new Set(); // initialize an empty Set
    for (const number of array) {
      const complement = target - number;

      // .has returns true if the Set includes the complement
      if (seenNumbers.has(complement)) return true;

      // .add adds the number to the Set
      seenNumbers.add(number);
    }
    return false;
  }


/* 
  Write the Big O time complexity of your function here
  
  // O(n) time complexity

*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here


Each time we go over the array of numbers, we find a complimentary number that increases the value of our aim.
The next step is to loop through the remaining numbers in the array and determine which ones are the complement.
In that case, we return true. We return false if we run out of array space.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


// runtime = O(n)
function hasTargetSum(array, target) {
  const viewedNums = {}; 
  for(const numbers of array){
  const complementary = target - numbers;
  if(viewedNums[complementary]) return true;
  viewedNums[numbers] = true;
  }

  return false;

}

/* 
  Write the Big O time complexity of your function here

  O(n)
*/

/* 
  Add your pseudocode here
  create an object of viewedNums that will keep track of the seen numbers of the array 
  Iterate through the array: for(let i = 0; i < array.length; i++)
  Check for a complementary in the array: (com = target - num)
  check if any keep in our object is the complementary, if so return true: if(viewedNums[complementary]) return true;
  otherwise add that number to the object: viewedNums[array[i]] = true;



*/

/*
  Add written explanation of your solution here
  
  I created an object of viewedNums that will keep track of the seen numbers of the array 
  I Iterated through the array: for(let i = 0; i < array.length; i++)
  I Checked for a complementary in the array: (com = target - num)
  I checked if any keep in our object is the complementary, if so return true: if(viewedNums[complementary]) return true;
  otherwise add that number to the object: viewedNums[array[i]] = true;
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

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5, 7, 9], 4));
}

module.exports = hasTargetSum;

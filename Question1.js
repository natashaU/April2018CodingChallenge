/* Question 1 -- sumOfTwo(a,b,v): You have two integer arrays, a and b,
and an integer target value v. Determine whether there is a pair of numbers,
 where one number is taken from a and the other from b, that can be added
 together to get a sum of v. Return true if such a pair exists,
 otherwise return false. */


 // I iterate through the 'a' array using a "for of" loop
 // I subtract the target number "v" from each number in the "a" array
 // I use the includes method to see if the subtracted number is in the
 // "b" array, if it is in the b array then I return true
 // After I loop through all the numbers, if a target match is not found
 // in the b array, I return false

 function sumOfTwo(a,b,v) {
  for (let num of a) {
    if (b.includes(v-num)) {
      return true
    }
  }
  return false
 }

//testing
//let a1 = [1, 2, 3, 4, 5,  10, 6, 7, 3];
//let b1 = [0, 2, 3, 9, 4, 5 ,7, 3, 3, 5, 9, 17, 17, 91, 1, 1];
//let v2 = 27;
//let v2 = -27;

//sumOfTwo(a1,b1,v2)

/*Question 2 -- stringReformatting(string): The string s contains dashes
that split it into groups of characters.
You are given an integer k that represents the number of characters in
groups that your output should have. Your goal is to return a new string
that breaks s into groups with a length of k by placing dashes at the
correct intervals. If necessary, the first group of characters can be
shorter than k. It is guaranteed that there are no consecutive
dashes in s.

For s = "2-4a0r7-4k" and k = 4, the output should be
stringReformatting(s, k) = "24a0-r74k";

The input string "2-4a0r7-4k" is split into three groups
with lengths of 1, 5 and 2. Since k = 4, you need to split the string into
two groups of 4 characters each, making the output string "24a0-r74k".

For s = "2-4a0r7-4k" and k = 3, the output should be
stringReformatting(s, k) = "24-a0r-74k".

Given the same input string and k = 3, split the string into groups
of 2, 3, and 3 characters to get the output string of "24-a0r-74k". */

// create an empty string to save the new reformatted string
// keep track of the number of characters with a counter
// iterate through the string backwards, since the first group is the only
// group that can have a length that's less than K (or the character count)

// if the character is a dash, skip the iteration, since it's not added to the
// character counter nor does it count as a character

// add each character that is not a dash to the beginning of the reformatted
//string

// increment the character counter by 1
// once the character counter equals k then add a dash to the reformatted String
// set the counter to 0
// once the iteration is complete return the new string



function strReformat(str,k) {
  let reformattedStr = "";
  let counter = 0;

  for (let i=str.length-1; i>=0; i--){
    if (str[i] === "-") {
      continue;

    } else {
      reformattedStr = str[i] + reformattedStr;
      counter++

      if (counter===k && i!==0) {
        reformattedStr = "-" + reformattedStr;
        counter = 0;
      }
    }
  }
  return reformattedStr
}

//testing
//strReformat("2-4a0r7-4k", 4)
//strReformat("2-4a0r7-4k", 3)

/*Question 3 -- getClosingParen(sentence, openingParenIndex):

"Sometimes (when I nest them (my parentheticals) too
much (like this (and this))) they get confusing."

Write a function that, given a sentence like the one above, along
with the position of an opening parenthesis, finds the
corresponding closing parenthesis.

Example: if the example string above is input with the number
10 (position of the first parenthesis), the output should be 79
(position of the last parenthesis). */


// create a regular expression variable for the opening parenthesis
// if the given index is not an open parenthesis throw an error
// keep track of the parenthesis with a counter

// iterate through the string starting at the index directly after the
// given opening parenthesis index

// if the character matches the regular expression (open parenthesis),
// add one to the counter

// if the character is equal to a closing parenthesis, decrease one from
// the counter

// if the counter is 0, then return the index of the closing parenthesis

// if the counter never equals 0 after the iteration then return -1,
// since there is no matching closing parenthesis.

function getClosingParen(sentence,openParenInd) {
  const regExp = /\(/g

  if (!sentence[openParenInd].match(regExp)) {
    throw new Error("This position does not contain an opening parenthesis.")
  }

  let depth = 1;

  for (let i=openParenInd+1; i<sentence.length;i++) {
    if (sentence[i].match(regExp)) {
      depth++
    }

    if (sentence[i] === ")") {
      depth--
    }

    if (depth === 0) {
      return i
    }
  }
  return -1
}


// testing
//getClosingParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10)

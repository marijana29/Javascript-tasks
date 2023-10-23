// Implement a oddNumbers function.

//  The function has two parameters, both are numbers.
//  Iterate over all numbers between first number and the second number.
//  Store all oddNumbers in string, seperated by a comma and return the string.
//  Allowed are only positive numbers, add a check.
// TODO: Implement the oddNumbers function

///
function oddNumbers(start, end) {
  if (start < 0 || end < 0) {
    return "Both numbers must be positive.";
  }

  let result = "";

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      if (result !== "") {
        result += ",";
      }
      result += i;
    }
  }

  return result;
}

console.log(oddNumbers(0, 4)); // Output: "1,3"
console.log(oddNumbers(10, 33)); // Output: "11,13,15,17,19,21,23,25,27,29,31,33"
console.log(oddNumbers(9, 12)); // Output: "9,11"
console.log(oddNumbers(-5, 5)); // Output: "Both numbers must be positive."

////second task

// Implement a charCount function.

//  The function has a first parameter for a word which is a string.
//  The function has a second parameter which contains the character to search for which is a string.
//  Check if the second parameter consists of only one character, if not, quit the function.
//  The function returns the number of times the character from the second parameter is present in the word.
//  The function should be case insensitive.

function charCount(word, char) {
  if (char.length !== 1) {
    return "Second parameter must be a single character.";
  }

  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      count++;
    }
  }
  return count;
}

// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3

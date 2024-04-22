// First Personal Solution
function gcdOfStrings(str1: string, str2: string): string {
  // Declare a variable to store the greatest common divisor string
  let greatestCommonDivisorString = "";
  // Declare a variable to store the current common string
  let currentCommonString = "";

  // Iterate over the length of the shortest string
  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    // If both strings share the same character at the same index, add
    // the character to the current common string
    if (str1[i] === str2[i]) {
      currentCommonString += str1[i];
    } else {
      // Else we break early as no common divisor is possible
      break;
    }

    // Proceed if the current common string fits both strings
    if (
      str1.length % currentCommonString.length === 0 &&
      str2.length % currentCommonString.length === 0
    ) {
      // Declare variables to store the amount of times that
      // the common divisor string fits each string
      const i = str1.length / currentCommonString.length;
      const j = str2.length / currentCommonString.length;

      // Concatenate the current common string the amount of times that it
      // fits each string, if both concatenations match the strings,
      // meaning that it is a common divisor, assign the current common
      // string to the greatest common divisor string
      if (
        currentCommonString.repeat(i) === str1 &&
        currentCommonString.repeat(j) === str2
      ) {
        greatestCommonDivisorString = currentCommonString;
      }
    }
  }

  return greatestCommonDivisorString;
}

// Uses brute force just like the first solution, but this time we
// start from the greatest possible common divisor (base) which
// is also the shortest string, this could represent an earlier
// return compared to previous solution
function gcdOfStrings2(str1: string, str2: string): string {
  // Determine the base, which is the shortest string
  let base = str1.length > str2.length ? str2 : str1;

  // Iterate over the base's length
  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    // Determine if both strings are divisible by the base
    if (str1.length % base.length === 0 && str2.length % base.length === 0) {
      // Concatenate the base the amount of times that it
      // fits each string, if both concatenations match the strings,
      // meaning that it is a common divisor, return the current base
      if (
        base.repeat(str1.length / base.length) === str1 &&
        base.repeat(str2.length / base.length) === str2
      ) {
        return base;
      }
    }
    // Else we remove the last character from the base to continue
    // searching for possible common divisors
    base = base.slice(0, -1);
  }

  return "";
}

gcdOfStrings("ABABAB", "ABAB");
gcdOfStrings2("ABABAB", "ABAB");

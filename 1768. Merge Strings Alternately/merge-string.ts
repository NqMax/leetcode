// First Personal Solution
function mergeAlternately(word1: string, word2: string): string {
  let mergedString = "";

  // Iterate over word1
  for (let i = 0; i < word1.length; i++) {
    // If there does not exist any more characters
    // on word2 (meaning word1 is larger) we concatenate
    // the rest of word1 to the merged string
    if (!word2[i]) {
      mergedString += word1.slice(i);
      break;
    }
    // Else we add the alternating characters to the result string
    mergedString += word1[i] + word2[i];
  }
  // If word1 is smaller than word2, concatenenate the
  // rest of word2 to the merged string
  if (word1.length < word2.length) {
    mergedString += word2.slice(word1.length);
  }
  return mergedString;
}

// Two pointers
function mergeAlternately2(word1: string, word2: string): string {
  let mergedString = "";
  // Define two pointers to track the current character index of both words
  let i = 0;
  let j = 0;

  // Iterate while the current character index of either word is less than its length
  while (i < word1.length || j < word2.length) {
    // If i is still a valid index in word1, meaning we have not yet exhausted word1
    if (i < word1.length) {
      // Add word1 current letter
      mergedString += word1[i++];
    }
    // If j is still a valid index in word2, meaning we have not yet exhausted word2
    if (j < word2.length) {
      // Add word2 current letter
      mergedString += word2[j++];
    }
  }
  return mergedString;
}

mergeAlternately("abc", "pqr");
mergeAlternately2("abc", "pqr");

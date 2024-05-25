function reverseVowels(s: string): string {
  // Declare array with all possible vowel variations
  // in order to identify them in the string
  const vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // Array holding the vowels encountered in the string
  const wordVowelsArray: string[] = [];

  // Iterate over the string
  for (const char of s) {
    // If the current character in the iteration is included
    // in vowelsArray, push it to wordVowelsArray
    if (vowelsArray.includes(char)) {
      wordVowelsArray.push(char);
    }
  }

  // Invert the string vowels array in order to
  // replace them in the original string
  wordVowelsArray.reverse();

  // Convert the original string into an array of characters
  const charArray = [...s];

  // Value to hold the index of next vowel to index
  // in wordVowelsArray
  let vowelCounter = 0;

  // Iterate over the characters of the original string
  for (let i = 0; i < charArray.length; i++) {
    // If the current character in the iteration is a vowel,
    // replace it by the corresponding vowel in the inverted
    // wordVowelsArray
    if (vowelsArray.includes(charArray[i])) {
      charArray[i] = wordVowelsArray[vowelCounter];
      vowelCounter++;
    }
  }

  // Join the chars in the charArray to form a string
  const vowelInvertedWord = charArray.join("");

  return vowelInvertedWord;
}

reverseVowels("hello");

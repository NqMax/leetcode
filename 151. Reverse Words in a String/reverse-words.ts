function reverseWords(s: string): string {
  // 1. Split the string into an array of words separated by a space
  // 2. Filter only truthy words, this will filter out empty strings outputted by split(" ")
  //    due to leading, trailing or middle spaces (Eg. [ "", "", "hello", "", "world", "", "" ] from the string "  hello  world  ")
  // 3. Reverse the array of filtered words
  // 4. Join the elements of the array into a series of strings separated by a space
  const invertedString = s
    .split(" ")
    .filter((word) => word)
    .reverse()
    .join(" ");

  return invertedString;
}

reverseWords("  hello world  ");

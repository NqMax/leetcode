function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let greatestNumberOfCandies = 0;

  // Determine the greatest number of candies held by a kid
  for (const candyNumber of candies) {
    if (candyNumber > greatestNumberOfCandies) {
      greatestNumberOfCandies = candyNumber;
    }
  }

  const result = [];

  // Iterate over the candies array and perform a comparison for each number of candies,
  // if the number of candies plus the extra candies is equal or greater than greatestNumberOfCandies
  // then push true to the result array, else push false.
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= greatestNumberOfCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

kidsWithCandies([12, 1, 12], 1);

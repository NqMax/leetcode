function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // Counter to hold the number of planted flowers
  let flowersPlanted = 0;

  // Iterate over the flower bed
  for (let i = 0; i < flowerbed.length; i++) {
    // Check if adjacent plots are empty, check for undefined for the cases in which
    // we are on the first and last index since we would be checking on flowerbed[-1]
    // and flowerbed[flowerbed.length] (out of bounds) respectively, both are therefore undefined
    if (
      (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) &&
      flowerbed[i] === 0 &&
      (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)
    ) {
      // If adjacent plots are empty, place a flower on the plot (therefore mutating the array),
      // and increment the flowersPlanted counter by 1
      flowerbed[i] = 1;
      flowersPlanted += 1;
    }
  }

  // If the amount of flowers planted is equal to or greater than n, it means that
  // n new flowers were able to be planted on the flowerbed without violating the
  // no-adjacent-flowers rule, return true.
  if (flowersPlanted >= n) {
    return true;
  }
  // Else, the amount of request flowers can not be planted without violating
  // the no-adjacent-flowers rule, return false.
  return false;
}

canPlaceFlowers([0, 0, 1, 0, 1], 1);

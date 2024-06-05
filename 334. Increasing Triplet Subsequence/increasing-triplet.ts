function increasingTriplet(nums: number[]): boolean {
  let s1 = Infinity;
  let s2 = Infinity;

  for (const num of nums) {
    if (num > s2) {
      return true;
    }
    if (num > s1) {
      s2 = num;
    }
    s1 = Math.min(num, s1);
  }

  return false;
}

console.log(increasingTriplet([5, 4, 3, 2, 1]));

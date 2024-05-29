function productExceptSelf(nums: number[]): number[] {
  const answer = [];

  // Iterate over the array to find the prefixes of each number, the prefix
  // holds the value of multiplying each number to the left of the current element,
  // we start with a 1 by default for the first element
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    // The value in the index i of the answer array is equal to the prefix,
    // which holds the value of multiplying each number to the left  
    // of the current element
    answer[i] = prefix;
    // Multiply the prefix by itself and the current value in the nums array
    prefix *= nums[i];
  }

  // Iterate the array in reverse order to find the postfixes of each number, the postfix
  // holds the value of multiplying each number to the right of the current element,
  // we start with a 1 by default for the first element
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    // In order to calculate the answer, the value in the index i of the answer array will be equal
    // to the current postfix times the value that is already in the i position of the array, these will
    // be the prefixes that we calculated in the previous array iteration
    answer[i] = postfix * answer[i];
    // Multiply the postfix by itself and the current value in the nums array
    postfix *= nums[i];
  }

  return answer;
}

productExceptSelf([2, 3, 4, 5]);

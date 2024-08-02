function twoSum(size, nums, target) {
  if (nums.length !== size) {
    throw new Error('The size of the array does not match the provided size');
  }

  const indexMap = new Map(); // To store the index of each number

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement of the current number

    if (indexMap.has(complement)) {
      // If the complement exists in the map, return the indices
      return [indexMap.get(complement), i];
    }

    // Otherwise, store the index of the current number
    indexMap.set(nums[i], i);
  }

  // If no solution is found, return [-1, -1]
  return [-1, -1];
}

// Example usage:


console.log(twoSum(size, nums, target)); // Output: [0, 1]

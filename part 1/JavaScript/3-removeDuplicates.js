function removeDuplicates(arr) {
  let nums = [];
  // Use the spread operator and the Set object to remove duplicates.
  nums = [...new Set(arr)];
  console.log(nums);
  return nums;
}

removeDuplicates([1, 2, 3, 2, 1]);

function reverseString(str) {
  // Split the input `str` into an array of characters, reverse the order of the elements in the array, and then join the elements back into a single string.
  const text = str.split("").reverse().join("");
  console.log(text);
  return text;
}

reverseString("Hello World");

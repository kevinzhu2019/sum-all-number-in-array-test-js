function sumItems(array) {
  // Sum all the numbers in the array
  if (Array.isArray(array)) {
    let sum = 0
    for (const item of array) {
      if (Array.isArray(item)) {
        sum = sum + sumItems(item);
      } else {
        sum = sum + item;
      }
    };
    return sum;
  }
}

module.exports = sumItems;
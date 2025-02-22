function insertionSort(inputArr) {
  let n = inputArr.length;
      for (let i = 1; i < n; i++) {
          // Choosing the first element in our unsorted subarray
          let current = inputArr[i];
          // The last element of our sorted subarray
          let j = i-1; 
          while ((j > -1) && (current < inputArr[j])) {
              inputArr[j+1] = inputArr[j];
              j--;
          }
          inputArr[j+1] = current;
      }
  return inputArr;
}

module.exports = (arr1, arr2, direction) => {
  const arr3 = [...arr1, ...arr2]
  const sortedArray = insertionSort(arr3)
  return direction === 'asc' ? sortedArray : sortedArray.reverse()
}

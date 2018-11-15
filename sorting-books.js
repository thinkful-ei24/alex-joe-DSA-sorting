/**
 * 
 * input: [hello, alex, joe]
 * 
 * output: [alex, hello, joe]
 * 
 * 
 * function (array)
 *   for every item list

 * 
 * 
 * 
 */

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1].toUpperCase().charCodeAt(0);
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i].toUpperCase().charCodeAt(0) <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

const data = ['zebra', 'alex', 'boy', 'joe', 'aaron'];

console.log(quickSort(data));

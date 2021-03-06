let count = 0;

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;

  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function quicksort(array, start = 0, end = array.length) {
  count++;
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quicksort(array, start, middle);
  array = quicksort(array, middle + 1, end);
  return array;
}

console.log('quick sort', quicksort([1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1]));
console.log('count', count);

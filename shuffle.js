const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const swap = (array, start = 0, end = array.length - 1) => {
  const tmp = array[start];
  array[start] = array[end];
  array[end] = tmp;
}

const shuffle = (array) => {
  for(let i=0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random() * Math.floor(array.length));
    console.log(randomIndex);
    swap(array, i, randomIndex);
  }

  return array;
}

console.log(shuffle(data));
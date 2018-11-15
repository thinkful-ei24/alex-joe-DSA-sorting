const data = [8, 25, 78, 30, 9, 10, 11, 5, 89, 37, 3, 48]; //12

function bucketSort(array, small, big) {
const sortedArray = [];
const bucketArray = Array((big - small) + 1);

for(let i=0; i < array.length; i++) {
  bucketArray[array[i] - small] = array[i];
}

for(let i=0; i < bucketArray.length; i++) {
    if(bucketArray[i] !== undefined) {
      sortedArray.push(bucketArray[i]);
    }
  }

return sortedArray;
}

console.log(bucketSort(data, 3, 86));
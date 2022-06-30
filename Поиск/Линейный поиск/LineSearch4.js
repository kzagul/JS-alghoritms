//Дана последовательность чисел длиной N (N > 1)
//Найти максимально число в последовательности
//также, найти второе по величине число

//for
function lineSearch(arr) {
  let max1 = Math.max(arr[0], arr[1]);
  let max2 = Math.min(arr[0], arr[1]);
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] >= max2) {
      max2 = arr[i];
    }
  }
  return [max1, max2];
}

const array = [1, 2, 3, 4, 5, 6, 32, 7, 8, 9, 10, 11, 12, 13, 14, 10, 15, 16];

console.log(lineSearch(array));

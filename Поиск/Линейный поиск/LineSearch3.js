//Дана последовательность чисел длиной N (N > 0)
//Найти максимально число в последовательности

//for
function lineSearch(arr) {
  let max = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= max) max = arr[i];
  }
  return max;
}

const array = [1, 2, 3, 4, 5, 6, 32, 7, 8, 9, 10, 11, 12, 13, 14, 10, 15, 16];

console.log(lineSearch(array));

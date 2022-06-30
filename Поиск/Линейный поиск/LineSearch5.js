//Дана последовательность чисел длиной N (N > 1)
//Найти минимальное четное число
//или вывести -1 если его не существует

//for
function lineSearch(arr) {
  ans = -1;
  for (let i = 0; i <= arr.length; i++) {
    if ((arr[i] <= ans ||  ans == -1) && arr[i]%2 == 0) {
      ans = arr[i];
    } 
  }
  return ans ;
}

const array = [10, 11, 12, 13, 14, 10, 15, 16, 5, 6, 32, 7, 8, 9];

console.log(lineSearch(array));

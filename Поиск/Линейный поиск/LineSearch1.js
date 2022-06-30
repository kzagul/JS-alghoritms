//Дана последовательность чисел длиной N
//Найти последнее (правое) вхождение числа X и вывести индекс
//вывести -1 если не встречалось

//for
function lineSearch(arr, val) {
    let ans = -1
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == val) return i;
  }
  return ans;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 10, 15, 16];

console.log(lineSearch(array, 10));

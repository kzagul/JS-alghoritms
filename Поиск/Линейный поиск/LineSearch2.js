//Дана последовательность чисел длиной N
//Найти первое (левое) вхождение числа X и вывести индекс
//вывести -1 если не встречалось

//for
function lineSearch(arr, val) {
    let ans = -1
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == val && ans == -1) return i;
  }
  return ans;
}

//foreach
function lineSearch2(arr, val) {
  let ans = -1;
  arr.forEach((element) => {
    if (element === val) {
      ans = element;
    }
  });
  return arr.indexOf(ans)
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 10, 15, 16];

console.log(lineSearch2(array, 10));

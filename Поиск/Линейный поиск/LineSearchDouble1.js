//Двухпроходный алгоритм линейного поиска

//Дана последовательность слов
//вывести все самые короткие слова через пробел

//for
function lineSearch(words) {
    let minlen = words[0].length
    for (let i = 0; i <= 0; i++){
        if (words[i].length < minlen) minlen = words[i].length
    }
    let ans = ''
    for (let i = 0; i <= 0; i++){
        if (words[i].length === minlen) ans += words[i] + ' '
    }
    return ans
}

const array = ['hello', 'my', 'name', 'is', 'mike'];

console.log(lineSearch(array));

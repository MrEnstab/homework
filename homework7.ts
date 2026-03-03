let map: number[] = [2, 5, 8, 11, 14]
let smap = map.map(num => 2* num)
console.log(smap)
//---------------------------------------------
let map2:number[] = [15, 22, 8, 31, 12, 47, 19]
console.log(map2.filter(num => num % 2 == 0))

let animal:string[] = ['кот', 'собака', 'хомяк', 'слон', 'тигр']
console.log(animal.filter(x => x.length > 3))

let word: string[] = ['яблоко', 'банан', 'апельсин', 'киви', 'груша']
console.log(word.filter(word => word.includes('а')))
//---------------------------------------------

let map3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let tmap3:number[] = map3
    .filter(num => num %2 == 0)
    .map(num => num * 10)
console.log(tmap3)

let word2:string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry']
console.log(word2.filter(x => x.length > 5).map(word2 => word2.toUpperCase()))

//---------------------------------------------

const numbers1 = [23, 45, 12, 67, 34];

const summ = numbers1.reduce((acc, current) => {
  return acc + current;
}, 0);

console.log("Сумма:", summ);

const numbers2 = [1, 2, 3, 4, 5];

const product = numbers2.reduce((acc, current) => {
  return acc * current;
}, 1);

console.log("Произведение:", product); 

const numbers3 = [42, 17, 85, 23, 91, 36];

const maxx = numbers3.reduce((acc, current) => {
  return current > acc ? current : acc;
}, numbers3[0]);

console.log("Максимум:", maxx); 


const min = numbers3.reduce((acc, current) => {
  return current < acc ? current : acc;
}, numbers3[0]);

console.log("Минимум:", min);

const evenOddCount = numbers3.reduce(
  (acc, current) => {
    if (current % 2 === 0) {
      acc.even++;
    } else {
      acc.odd++;
    }
    return acc;
  },
  { even: 0, odd: 0 }
);

console.log("Четных:", evenOddCount.even);
console.log("Нечетных:", evenOddCount.odd);

//---------------------------------------------

let num3: number[] = [5, 12, 8, 130, 44, 67, 23, 9]
console.log("Результат", num3
    .filter(x => x > 10)
    .map(x => x * 2)
    .filter(x => x > 50)
)

//---------------------------------------------

let num4:number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const rednum3 = num4.reduce((acc, current) => {

    return acc + current
},0)
console.log("Среднее арифм", rednum3 / num4.length)

//---------------------------------------------

const words: string[] = ['кот', 'собака', 'хомяк', 'попугай', 'рыбка'];
const totalLetters = words.reduce((acc, current) => {
  return acc + current.length;
}, 0);

console.log("Общее кол-во букв:", totalLetters);


const longestWord = words.reduce((acc, current) => {
  return current.length > acc.length ? current : acc;
});

console.log("Самое длинное слово:", longestWord);


const wordsWithLength = words.map((word) => {
  return `${word} (${word.length})`;
});

console.log("Слова с длиной:", wordsWithLength);
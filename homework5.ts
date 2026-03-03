let cities: string[] = ["Лондон", "Париж", "Берлин", "Рим", "Мадрид"];
console.log(cities)
//------------------------------------------------------------------
console.log("Первый", cities[0]);
console.log("Третй", cities[2]);
console.log("Последний", cities[4]);
//------------------------------------------------------------------
cities[1] = "MCK";
//------------------------------------------------------------------
cities.push("Токио");
cities.unshift("Калифорния");
cities.pop()
cities.shift()
console.log(cities)
console.log(cities.indexOf("МСК"))
//------------------------------------------------------------------
const numbers: number[] = [10, 20, 30, 40, 50];
let sum = 0;

for (let num of numbers) {
  sum += num;
}

console.log("Сумма:", sum);
//------------------------------------------------------------------

let m: number[] = [1,2,3]
let copy = [...m]
copy.push(4)
console.log(m)
console.log(copy)

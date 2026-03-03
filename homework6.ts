//------------------- 
function sumt(a: number, b: number): number {
  return a + b;
}
console.log(sumt(2, 3)); 


function isPositive(n: number): boolean {
  return n > 0;
}
console.log(isPositive(10)); 

function getLength(s: string): number {
  return s.length;
}
console.log(getLength("привет")); 

//------------------- 
function max(a: number, b: number): number {
  return a >= b ? a : b;
}
console.log(max(7, 4)); 

function canVote(age: number): boolean {
  return age >= 18;
}
console.log(canVote(18)); 


//------------------- 
function sumArray(nums: number[]): number {
  return nums.reduce((acc, x) => acc + x, 0);
}
console.log(sumArray([1, 2, 3])); 


function getLongWords(words: string[]): string[] {
  return words.filter((w) => w.length > 5);
}
console.log(getLongWords(["кофеНаАльтернативномКокосовомМолоке", "питон", "чай", "программирование"])); 

function doubleNumbers(nums: number[]): number[] {
  return nums.map((x) => x * 2);
}
console.log(doubleNumbers([1, 2, 3]));
//------------------- 
function greet(name: string, title?: string): string {
  return title ? `Привет, ${title} ${name}!` : `Привет, ${name}!`;
}
console.log(greet("Иван")); 
//------------------- 


function calculatePrice(price: number, discount: number = 0): number {
  return price * (1 - discount);
}
console.log(calculatePrice(100)); 
//------------------- 


const arr: number[] = [1, 2, 3, 4, 5];
arr.forEach(function (item) {
  console.log(item);
});


const triple = (n: number): number => n * 3;
console.log(triple(5));
//------------------- 
function analyzeArray(nums: number[]): string {
  if (nums.length === 0) {
    return "Массив пуст: сумма=0, среднее=0, минимум=не определен, максимум=не определен";
  }

  const total = sumArray(nums);
  const avg = total / nums.length;

  let minVal = nums[0];
  let maxVal = nums[0];

  for (const x of nums) {
    if (x < minVal) minVal = x;
    if (x > maxVal) maxVal = x;
  }

  return `Сумма: ${total}, Среднее: ${avg}, Минимум: ${minVal}, Максимум: ${maxVal}`;
}
console.log(analyzeArray([3, 1, 9, 2]));
//------------------- 









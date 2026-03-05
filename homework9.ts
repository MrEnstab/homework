type ID= string | number

let ddta:ID = 10
//--------------------------------------------
type DayOfWeek = 'пн' | 'вт' | 'ср' | 'чт' | 'пт' | 'сб' | 'вс';
const dday:DayOfWeek = "пт"
//--------------------------------------------
type Person = {
    name: string;
    age: number;
    city: string;
}
const persona:Person = {
    name: "Ернест Эб",
    age: 25,
    city: "In PC"
}
console.log(persona)
//--------------------------------------------
type machine = {
    brand: string;
    model: string;
    year?: number;
}

const mm:machine = {
    brand: "УАИЗИК",
    model: "YAЗ-228"
}
const mmm:machine = {
    brand: "УАИЗИК",
    model: "YAЗ-228",
    year: 1020
}
console.log(mm)
console.log(mmm)
//--------------------------------------------


let settings = {
    theme: 'Dark',
    fontSize: 14,
    language: 'ru'
};

type typeSettings = typeof settings

// let Personal:typeSettings = {
//     pers: 'Coolkid',
//     money: 12000,
//     ability: 'M1'
// };


let Personal:typeSettings = {
    theme: 'White',
    fontSize: 20,
    language: 'en'
};

console.log(Personal)
//--------------------------------------------
type keys = keyof Person
let key:keys = "name"


const directions = ['north', 'south', 'east', 'west'] as const;
type Direction = typeof directions

function direct(dire:Direction) {
    console.log(dire)
}

direct('north')
//--------------------------------------------
type Color = string | { r: number; g: number; b: number }
const color = {r: 0, g:0, b: 0} satisfies Color
console.log(color)
//--------------------------------------------


 
let conf: readonly number[] = [1, 2, 3, 4, 5];
console.log('данные конфига:', conf);
conf.push(6);
console.log('данные конфига:', conf);
//не понял, что я делаю не так 

//--------------------------------------------

function reverseArray<T>(arr: T[]): T[] {
  return [...arr].reverse();
}

const str = reverseArray<string>(['a', 'b', 'c']);
console.log(str)

type Pair<T, U> = {
  f: T;
  s: U;
};

const userAge: Pair<string, number> = {
  f: 'Alice',
  s: 25,
};
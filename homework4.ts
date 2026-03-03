for (let i=0; i<30; i++ ) {
    if (i % 3 == 0 && i!=0) {
        console.log(i)
    }
}
console.log("/---------------------")
let t:number 
let trr:number = 0
do {
    trr++
    t = Math.floor(Math.random() *10)
} while (t != 7)
console.log("Попытки", trr)
console.log("Число", t)




console.log("/---------------------")
let i: number = 1
let a: number = 1
do {
    i++;
    a*=i;
    console.log(a)
} while (i < 10);
console.log("Факториал 10", a)


console.log("/---------------------")
let nm:number = 1 
for (let g=1; g<100; g++) {
    nm +=g 
    if (nm > 100) {
        break
    }

}
console.log("Сумма", nm)

console.log("/---------------------")
for (let g=1; g<20; g++) {
    if (g % 3 ==0) {
        continue
    }
    console.log(g)
}
console.log("/---------------------")
for (let i = 3; i <= 6; i++) {
    console.log(`--- Таблица для ${i} ---`);
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
console.log("/---------------------")

for (let i=5; i>=1; i--) {
    let string:string = ""
    for (let c=i; c>= 1; c--) {
        string += "* "
    }
    console.log(string)
}
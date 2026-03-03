let secretNumber: number = 7
let gues: number = 10
if (gues!=secretNumber) {
    console.log("ну не повезло")
}
//-------------------------------
const purchaseAmount: number = 5000
if (purchaseAmount >= 5000) {
    console.log("Скидка 10%")
    const pursh: number = purchaseAmount * 10 / 100
    console.log(purchaseAmount - pursh)
}else {
    console.log("Скидки не будет..")
}
//--------------------------------
const vos:number = 20

if (vos <= 12) {
    console.log("Ребенок")
} else if (vos > 12 && vos <= 17) {
    console.log("Подросток")
} else if (vos >= 18 && vos < 60) {
    console.log("Взрослый")
} else if (vos >= 60) {
    console.log("Пенсионер")
}
//---------------------------------
const user: string = "Enstab"
const passwd: string = "tger34423"

let inUser: string = "Enstab"
let inPasswd: string = "2312"

if (user==inUser && passwd==inPasswd) {
    console.log("Добро пожаловать!")
} else if (user!=inUser && passwd==inPasswd) {
    console.log("Пользователь не найден")
} else if (user==inUser && passwd!=inPasswd) {
    console.log("Неверный пароль")
}
//---------------------------------

let parity = (17 % 2 == 0)
console.log(parity)

//---------------------------------


let day: number = 3; 
let dayName: string;

switch (day) {
    case 1:
        dayName = 'Понедельник';
        break; 
    case 2:
        dayName = 'Вторник';
        break;
    case 3:
        dayName = 'Среда';
        break;
    case 4:
        dayName = 'Четверг';
        break;
    case 5:
        dayName = 'Пятница';
        break;
    case 6:
	    dayName = 'Выходной';
        
        break;
    case 7:
        dayName = 'Выходной';
        break;
    default: 
        dayName = 'Некорректный день';
}
console.log(dayName)
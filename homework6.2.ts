
function jsonParse(json: string): void {
    try {
        let data = JSON.parse(json)
        console.log("Распарс", data)
    } catch (error) {
        console.log("Ошибка парсинга", error)
    }

}
jsonParse('{"nam "Анна"}')
//-----------------------------------------------
function age(age: number) {
    try {
        if (age < 0) {
            throw new Error('Возраст не может быть отрицательным');
        } else if (age > 150) {
            throw new Error('Некорректный возраст');
        } else if (age > 0 && age < 150) {
            return true
        }
    } catch (error)  {
   
        console.log(error)  
    }

}
age( 90)
//-----------------------------------------------
function divideWithLog(a: number, b: number): number | void {
  try {
    if (b === 0) {
      throw new Error("Деление на ноль");
    }

    const result = a / b;
    console.log(`Результат: ${result}`);
    return result;

  } catch (error: any) {
        console.log(error.message)

  } finally {
    console.log("Операция завершена");
  }
}
divideWithLog(12, 15)
divideWithLog(12, 2)
divideWithLog(12, 0)
//-----------------------------------------------
function randomSuccess(): Promise<string> {
   
    if ( Math.random() < 0.7 ) {
        return new Promise((resolve)=>{
            resolve("Успех")
        })
    } else {
        return new Promise((resolve)=>{
            resolve("Неудач")
        })
    }
}
async function visov() {
    try {
        let d: number = 0
        let n: number = 0
        for(let i = 0; i < 5; i++) {
            let res = await randomSuccess()
            if (res = "Успех") {
                d++
            } else {
                n++
            }
            console.log(res)

        }
        console.log("Успехов", d, "Неудача", n)
    } catch(error) {

    }
}
visov()

//-----------------------------------------------

function step1(): Promise<number> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(5)
        }, 1000)
    })
}

function step2(n: number): Promise<number> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            n *= 2
            resolve(n)
        }, 1000)
    })
}

function step3(n: number): Promise<string> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (n > 10) {resolve("Успех")} else {reject("Слишком мало")}
            
        }, 1000)
    })
}

async function f() {
    try {
        const data:number = await step1()
        const data1:number = await step2(data)
        await step3(data1)
        
    } catch (error: any) {
        console.log(error.message)
    }
    

}
f()
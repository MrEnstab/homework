console.log("Старт");
setTimeout(() => {
    console.log("Прошло 2 секунды");
}, 2000);
setTimeout(() => {
    console.log("И еще одна");
}, 3000);

async function delmess(time:number, soo:string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(soo);
        }, time)
    })
}
async function run() {
  const result = await delmess(6000, "Привет через 6 секунды!");
  console.log(result);
}

run();
console.log("тест")


function stepA(): Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Неплохо")
        }, 1000)
    })
}
function stepB(): Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Неплохо")
        }, 1000)
    })
}
function stepC(): Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Неплохо")
        }, 1000)
    })
}

async function vivod() {
   const test = await stepA()
   console.log(test)

   const test1 = await stepB()
   console.log(test1)
   const test2 = await stepC()
   console.log(test2)
}
vivod()
//------------------------------

function r1(): Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("1")
        }, 1000)
    })
}
function r2(): Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("2")
        }, 2000)
    })
}

function r3(): Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("3")
        }, 3000)
    })
}
async function run() {
    console.time("Время выполнения");
    const res = await Promise.all([r1(), r2(), r3()])
    console.timeEnd("Время выполнения");
    console.log(res)
}
run()


//-------------------------------------------------------
function loadUser(id: number): Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Пользователь MrEnstab")
        }, 1000)
    })
}
function loadPost(id: number): Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("*Куча постов")
        }, 1000)
    })
}

async function findPeople(id: number) {
    const people: string = await loadUser(id)
    const post: string = await loadPost(id)
    console.log(people, post)
}
findPeople(3232423)
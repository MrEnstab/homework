

//------------------- 

type Film = {
  title: string;
  year: number;
  rating: number;
  director?: string; // появится позже
};

const film: Film = {
  title: "Интерстеллар",
  year: 2014,
  rating: 8.6,
};

console.log("film.title:", film.title);
console.log("film.year:", film.year);
console.log("film.rating:", film.rating);

//------------------- 

film.year = 2015;
film.director = "Кристофер Нолан";

console.log("Обновлённый film:", film);

//------------------- 

type PersonWithAddress = {
  name: string;
  age: number;
  address: {
    city: string;
    street: string;
  };
};

const person: PersonWithAddress = {
  name: "Олег",
  age: 30,
  address: {
    city: "Берлин",
    street: "Alexanderplatz",
  },
};

console.log("Город человека:", person.address.city);

//------------------- 

const data = { name: "Анна", age: 25, city: "Москва" };

for (const key in data) {

  const typedKey = key as keyof typeof data;
  console.log(`${typedKey}:`, data[typedKey]);
}

//------------------- 

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1, b: 999 }; 

console.log("obj1 (оригинал):", obj1);
console.log("obj2 (копия):", obj2);

//------------------- 

const personInfo = { name: "Мария", age: 22 };
const contact = { email: "maria@mail.com", phone: "+49 111 222 333" };

const profile = { ...personInfo, ...contact };

console.log("profile:", profile);

//------------------- 

let user = { name: "Иван", age: 25, city: "Москва" };
const updatedUser = { ...user, city: "СПб" };

console.log("user:", user);
console.log("updatedUser:", updatedUser);

//------------------- 

type Student = {
  name: string;
  grade: number;
};

const students: Student[] = [
  { name: "Аня", grade: 5 },
  { name: "Петя", grade: 4 },
  { name: "Саша", grade: 3 },
];


const studentNames = students.map((s) => s.name);
console.log("Имена студентов:", studentNames);


const topStudents = students.filter((s) => s.grade > 4);
console.log("Оценка > 4:", topStudents);


const sumGrades = students.reduce((acc, s) => acc + s.grade, 0);
const avgGrade = students.length === 0 ? 0 : sumGrades / students.length;

console.log("Средняя оценка:", avgGrade);
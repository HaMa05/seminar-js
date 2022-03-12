const array = [1, 2, 3, 4, 5];

// expression function
const newArr = array.map(function (el) {
  return el * 2;
}); // [2, 4, 6, 8, 10]

// Or
const square = function (a) {
  return a * a;
};

// arrow function
const newArr2 = array.map((el) => {
  return el * 2;
}); // [2, 4, 6, 8, 10]

// Or
const square2 = (a) => {
  return a * a;
};

// String literal
// No ES6
let name = 'Bui Van Ha';
let age = 21;
let str = 'My fullname is ' + name + ', I am ' + age + ' years old.';
// My fullname is Bui Van Ha, I am 21 years old.

// ES6
let str1 = `My fullname ís ${name}, I am ${age} years old.`;
// My fullname is Bui Van Ha, I am 21 years old.

// Spread
// Giá trị mảng như tham số
const a = [1, 2, 3];
Math.max(...a);

// Nhân bản một mảng
const b = [4, 5, 6];
const c = [...b]; // c = [4, 5, 6], b !== c

// Nối mảng
const d = [...a, ...b]; // d = [1, 2, 3, 4, 5, 6]

// chuyển đổi mảng 1 chiều
const e = [
  [1, 2],
  [3, 4],
];
const f = [...e[0], ...e[1]]; // f = [1, 2, 3, 4]

// Chuyển đổi thành mảng
const g = [...'hello']; // g = ['h', 'e', 'l', 'l', 'o']

// Rest
function sum(...number) {
  return number.reduce((result, num) => {
    return result + num;
  });
}

// Default Parameters
function sayIntroduce(name = 'user', age = 18) {
  console.log(`Hello, my name is ${name}. I'm ${age} years old.`);
}

sayIntroduce(); //Hello, my name is user. I'm 18 years old.
sayIntroduce('Bùi Văn Hà', 21); //Hello, my name is Bùi Văn Hà. I'm 21 years old.

// Destructering
let obj1 = {
  name: 'Bui Van Ha',
  age: 21,
};

// Destructuring
let { name, age } = obj1;
// {name:"Bui Van Ha", age:21}

let { name: userName, age: ageUser } = obj1;
// {userName: "Bui Van Ha", ageUser: 21}

let obj2 = {
  name: 'Bui Van Ha',
  age: 21,
  hobbies: {
    music: 'EDM',
    sports: 'Game',
  },
};

// Destructuring
let {
  name,
  age,
  hobbies: { music, sports },
} = obj2;
// {name: "Bui Van Ha", age: 21, music: "EDM", sports: "Game"}

const [a, b] = [1, 2, 3, 4, 5, 6];
// a = 1; b = 2

const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
// a = 1; b = 2, c = 5

const [a, b, ...arr] = [1, 2, 3, 4, 5, 6];
// a = 1; b = 2, arr = [3, 4, 5, 6]

function createUser({ id, name, age, address }) {
  console.log(`My name is ${name}. I'm ${age} years old.`);
}

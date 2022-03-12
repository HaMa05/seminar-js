// 1: block scoped
let name = 'Bui Van Ha';
let times = 4;

if (times > 3) {
  let age = 21;
  console.log(age); // 21
}
console.log(age); // age is not defined

// 2: cập nhật giá trị, không khai báo lại biến
let gender = 'male'; // "male"
gender = 'female'; // "female"
let gender = 'other'; //'gender' has already been declared

// 3: different scoped
let hobby = 'Playing game';
if (true) {
  let hobby = 'Watching movies';
  console.log(hobby); // "Watching movies"
}
console.log(hobby); // "Playing game"

// 4: no hoisting
address = 'Bac Giang';
console.log(address); // Cannot access 'address' before initialization
let address;

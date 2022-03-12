// 1: global scoped or function/locally scoped.
var year = 2000;
console.log(year); // 2000

year = 3000;
console.log(year); // 3000

function years() {
  var year2 = 4000;
}
console.log(year2); // Error

// 2: khởi tạo lại và cập nhật lại dữ liệu
var greeter = 'hey hi';
var greeter = 'say Hello instead';

// 3: hoisting
name = 'Bui Van Ha';
console.log(name);
var name;

// 4: function scoped
function foo() {
  if (true) {
    var fruit1 = 'apple'; //exist in function scope
    const fruit2 = 'banana'; //exist in block scope
    let fruit3 = 'strawberry'; //exist in block scope
  }
  console.log(fruit1); // apple
  console.log(fruit2); // error: fruit2 is not defined
  console.log(fruit3); // error: fruit3 is not defined
}

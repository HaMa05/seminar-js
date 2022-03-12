let numbers = [1, 2, 4, 7];
let newNumbers = numbers.map((number) => number + 1);
// console.log(newNumbers); // [ 2, 3, 5, 8]

// console.log('Hello');
// setTimeout(() => {
//   console.log('Calling api ...');
// }, 1000);
// console.log('MonsterLab');

async function sayHi() {
  return 'MonsterLab';
}

// let sayHi = async () => 'Hi';
// sayHi().then((value) => console.log(`Hello ${value}`));

async function display() {
  let result = await sayHi();
  console.log(`Hello ${result}`);
}

display();
// Hello MonsterLab

// Reject
async function getUser(userId) {
  await Promise.reject(new Error('Invalid User Id'));
}
async function getUser(userId) {
  throw new Error('Invalid User Id');
}

// try .. catch
async function showServiceCost() {
  try {
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
  } catch (error) {
    console.log(error);
  }
}

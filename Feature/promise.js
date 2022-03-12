function makePromise(completed) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (completed) {
        resolve('Hoàn thành');
      } else {
        reject('Thất bại');
      }
    }, 1000);
  });
}

// let learnJS = makePromise(false);
// let course = 0;
// learnJS
//   .then((success) => console.log(success))
//   .catch((reason) => console.log(reason))
//   .finally(() => {
//     console.log(course);
//     course++;
//     console.log(course);
//   });

// Promise.all()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved');

    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved');
    resolve(20);
  }, 2 * 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved');
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
});

// The first promise has resolved
// The second promise has resolved
// The third promise has resolved
// Results: 10,20,30
// Total: 60

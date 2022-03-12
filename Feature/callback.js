let numbers = [1, 2, 4, 7, 3, 5, 6];
function isOddNumber(number) {
  return number % 2;
}
const oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers); // [ 1, 7, 3, 5 ]

// const oddNumbers = numbers.filter(function (number) {
//   return number % 2;
// });
// console.log(oddNumbers); // [ 1, 7, 3, 5 ]

// let oddNumbers = numbers.filter((number) => number % 2);
// console.log(oddNumbers); // [ 1, 7, 3, 5 ]

// Callback hell
function download(url, callback) {
  setTimeout(() => {
    console.log(`Downloading ${url} ...`);
    callback(url);
  }, 3000);
}

const url1 = 'https://www.image.net/pic1.jpg';
const url2 = 'https://www.image.net/pic2.jpg';
const url3 = 'https://www.image.net/pic3.jpg';

download(url1, function (picture) {
  console.log(`Processing ${picture}`);
  download(url2, function (picture) {
    console.log(`Processing ${picture}`);
    download(url3, function (picture) {
      console.log(`Processing ${picture}`);
    });
  });
});

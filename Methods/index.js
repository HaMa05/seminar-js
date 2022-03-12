// Map
const arr = [1, 2, 3];
let double = arr.map((el) => {
  return el * 2;
});
// [2, 4, 6]

// filter
let cities = [
  { name: 'Ha Noi', area: 3359 },
  { name: 'Ho Chi Minh', area: 2061 },
  { name: 'Hai Duong', area: 7138 },
  { name: 'Bac Ninh', area: 826 },
  { name: 'Bac Giang', area: 6677 },
];
let bigCities = cities.filter((el) => {
  return el.area > 2000;
});
// [
//   { name: 'Ha Noi', area: 3359 },
//   { name: 'Ho Chi Minh', area: 2061 },
//   { name: 'Hai Duong', area: 7138 },
//   { name: 'Bac Giang', area: 6677 }
// ]

// find
let firstBigCity = cities.find((el) => {
  return el.area > 2000;
});
// { name: 'Ha Noi', area: 3359 }

// reduce
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const students = [
  {
    name: 'Bùi Văn Hà',
    age: 20,
  },
  {
    name: 'Phạm Văn Long',
    age: 21,
  },
  {
    name: 'Phạm Thị Thanh Hiền',
    age: 20,
  },
  {
    name: 'Nguyễn Kim Bằng',
    age: 21,
  },
  {
    name: 'Phạm Minh Tu',
    age: 22,
  },
];
const filterByAge = students.reduce((result, item) => {
  const key = item.age;
  if (result[key]) {
    result[key].push(item);
  } else {
    result[key] = [];
    result[key].push(item);
  }
  return result;
}, {});
let a = {
  20: [
    { name: 'Bùi Văn Hà', age: 20 },
    { name: 'Phạm Thị Thanh Hiền', age: 20 },
  ],
  21: [
    { name: 'Phạm Văn Long', age: 21 },
    { name: 'Nguyễn Kim Bằng', age: 21 },
  ],
  22: [{ name: 'Phạm Minh Tu', age: 22 }],
};

// filter with reduce
const data = [
  {
    id: 1,
    name: 'Long',
    age: 24,
  },
  {
    id: 2,
    name: 'Hà',
    age: 20,
  },
  {
    id: 3,
    name: 'Hiền',
    age: 21,
  },
];

const filterData = data.reduce((result, item) => {
  if (item['age'] > 20) result.push(item);
  return result;
}, []);

// [
//     { id: 1, name: 'Long', age: 24 },
//     { id: 3, name: 'Hiền', age: 21 },
//];

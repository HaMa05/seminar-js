function countAge(birthday) {
  const time = new Date();
  const year = time.getFullYear();
  return year - birthday;
}

function isOdd(number) {
  return number % 2 === 0;
}

export { countAge, isOdd };

let data = [
  { a: 10, passed: true },
  { a: 15, passed: true },
  { a: 20, passed: true },
  { a: 1, passed: true },
];

let newarr = data.filter((value, index, array) => {
  // console.log(value);

  // if (value.a < 15) {
  //   value.passed = false;
  //   return false;
  // }

  // return array
  
  return value.a<15
});
console.log(newarr);

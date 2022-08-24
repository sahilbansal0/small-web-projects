let c = {
  a: 1,
};
console.log(typeof c);

let d = () => {};
console.log(typeof d);
console.log(typeof new Date());

let f = 12;
// f=null
console.log(typeof f.constructor);
let arr = "";
// console.log(typeof(arr[0]));
console.log(arr.constructor);
if (arr.constructor.toString().indexOf("Array") > -1) {
  console.log("array h bhai");
}

let z=12;
console.log(z<16);
// console.log(typeof());

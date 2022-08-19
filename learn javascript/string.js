let str="hello world world"

console.log(str.length);
// let d= str.slice(0,5);
// console.log(d);
let c=str.slice(-5)
console.log(c);
console.log(str.substring(6,11));
console.log(str.substr(0,5));
// console.log(str.replace("world","Sahil"));
console.log(str.replace(/world/g,"sahil"));
console.log(str.toUpperCase());
console.log(str.concat(" ","hello"));
// console.log(str.trim());
console.log("trimmed");
console.log(str.padStart(20,0));
console.log(str.charAt(16));
let arr=str.split(" ");
console.log(arr);
console.log(str.indexOf("w"));
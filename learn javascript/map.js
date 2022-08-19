let arra=[12,13,2,3,4];
// let d=arra.map(mapping);
// console.log(d);
// function mapping(value,index,array){
// // console.log(value);
// // console.log(index);
// // console.log(array);
// return value>2;
// }

// let c=arra.filter(filtering);
// console.log(c);
// function filtering(value){
// return value>2;
// }

let e=arra.reduce(redu);
console.log(e);
function redu(total,value){
// console.log(total);
// console.log(value);
return total+value;
}

let arr=[100,2,2,4,5,3,2]
arr.splice(2,0,"sahil");
console.log(arr);
arr.splice(3,2,"bansal")
console.log(arr);
let new_arr=["sahil","vikas","yadav","sab"]
console.log(new_arr.sort());
console.log(new_arr.reverse());
console.log(arr.sort(function(a,b){return a-b}));
console.log(arr.splice(0,4));
console.log(arr);
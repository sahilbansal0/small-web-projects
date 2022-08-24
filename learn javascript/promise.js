let d= new Promise((resolve,reject)=>{
let a=1;
if(a==1){
    resolve("resolved ")
}
else{
    reject("not resolved ")
}

})

d.then((message)=>{
console.log("resolved "+ message);
})
d.catch((message)=>{
    console.log("not resolved "+message);
})
let arr=[1,2,3,4,5];
arr.forEach(element => {
    console.log(element);
});

let obj={
    name:"sahil",
    age:21
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const elemen = obj[key];
        console.log(elemen);
        
    }
}
let array=[1,2,3]
function area(a){
    return a*a
}
function perimeter(a){
return 4*a
}


function calculate(a,fun) {
    for (let index = 0; index < array.length; index++) {
        const a = array[index];
        
        console.log(fun(a));
    }

} 

calculate(array,perimeter)


//by using map

let newarr=array.map(area);
console.log(newarr);let d=arra.map(mapping);
console.log(d);
function mapping(value,index,array){
// console.log(value);
// console.log(index);
// console.log(array);
return value>2;
}

let c=arra.filter(filtering);
console.log(c);
function filtering(value){
return value>2;
}
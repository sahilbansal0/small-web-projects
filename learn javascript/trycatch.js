let x=1
let y=0;

try{
   if (x=="") throw "empty"
   if(x==1)  throw "x is 1"
    
   
}
catch(err){
    console.log(err);
}
finally{
    y=1;
}
console.log(y);
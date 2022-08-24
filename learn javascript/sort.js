let arr = ["b", "a", "c", "d", "g"];
let z=[-2,-7,4,3,2,1,-1]
let c = arr.sort();
let d = c.reverse();
console.log(d);
console.log(z.sort(set));
function set(a,b) {
    if(a<b){
        return -1
    }
    else if(b<a){
        return 1;
    }
    else{
        return 0;
    }
    
}
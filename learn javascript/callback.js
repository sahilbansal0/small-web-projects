function some(){
    console.log("some");
}
function hell() {
    console.log("hell");
    
}
hell()
some()

function display(sum) {
    console.log(sum);
    
}
function add(a,b,display) {
    let c=a+b;
    display(c)
}
add(2,2,display)
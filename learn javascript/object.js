let obj={
    fullname:function (){
        return this.firstname +" " +this.lastname
    }
}
let name={
firstname:"sahil",
lastname:"bansal"
}
let d=obj.fullname.apply(name); // we can use call and apply both to bind one obj to another

console.log(d);
// let ar=[["a","p","p","l","e"],["m","a","n","g","o"],["o","r","a","n","g","e"]]
// console.log(ar[0])
let arr = ["k", "r", "i", "s","h","n","a"]
var arry = new Array(arr.length);
let len = 8;
let warr=[];
let z=arr.length
console.log(z);

document.getElementById("data").innerText=`${"_ ".repeat(z)}`
    

// let check = 0;


document.getElementById("chance").innerHTML = `${len}`;



window.addEventListener('keypress', function keyboard(e) {
    
    // console.log(e.keyCode)
    if((e.which>=97 && e.which<=122)){

        let c = e.key;
        // console.log("hehe");

        console.log(c);


    
        if (arr.includes(c) ) {
            arr.forEach((element, index) => {
                
                if (element == c) {
                    // console.log(index);
                    
                    arry[index] = element;
                   
                   
                    this.document.getElementById("data").innerHTML = `${arry.join("_ ")}`




                }

                
                
            
            });

        } else if(!warr.includes(c)){
            warr.push(c);
            len--
            this.document.getElementById("wrong").innerHTML+=`${c +"    "}`
            if (len == 0) {
                document.getElementById("chance").innerHTML = 0;
                this.document.getElementById("container2").classList.add("container2")
                setTimeout(() => {

                    this.alert("game over..press enter or space to replay")
                    this.window.location.reload();
                }, 100);

            }
            document.getElementById("chance").innerHTML = `${len}`;


            switch (len) {
                case 7:
                    let hr3 = document.createElement('hr')
                    hr3.setAttribute('class', "hr3")
                    document.getElementById('container2').append(hr3)


                    break;

                case 6:
                    let face = document.createElement('div')
                    face.setAttribute('class', "face")
                    document.getElementById('container2').append(face)

                    break;

                case 5:
                    let hr4 = document.createElement('hr')
                    hr4.setAttribute('class', "hr4")
                    document.getElementById('container2').append(hr4)

                    break;

                case 4:
                    let hr5 = document.createElement('hr')
                    hr5.setAttribute('class', "hr5")
                    document.getElementById('container2').append(hr5)

                    break;

                case 3:
                    let hr6 = document.createElement('hr')
                    hr6.setAttribute('class', "hr6")
                    document.getElementById('container2').append(hr6)

                    break;

                case 2:
                    let hr7 = document.createElement('hr')
                    hr7.setAttribute('class', "hr7")
                    document.getElementById('container2').append(hr7)

                    break;

                case 1:
                    let hr8 = document.createElement('hr')
                    hr8.setAttribute('class', "hr8")
                    document.getElementById('container2').append(hr8)

                    break;
                    // case 0:
                    //     document.getElementById("chance").innerHTML = 0;
                    //     this.alert("game over")

                default:
                    break;
            }

        }
        else{
            this.alert("you pressed the "+ c +" again")
        }


        if (JSON.stringify(arr) == JSON.stringify(arry)) {
            setTimeout(() => {
                this.alert("you win.........press enter or space to restart")
                this.window.location.reload();
            }, 300);

        }
    }
    else{
        this.alert("please enter right key")
    }

});

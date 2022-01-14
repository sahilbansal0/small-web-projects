var c = Math.floor((Math.random() * 6) + 1);
var d = Math.floor((Math.random() * 6) + 1);
// console.log(c)


switch (c) {
    case 1:
        document.querySelector(".player1 img").setAttribute("src", "Alea_1.png");

        break;
    case 2:
        document.querySelector(".player1 img").setAttribute("src", "Alea_2.png");

        break;
    case 3:
        document.querySelector(".player1 img").setAttribute("src", "Alea_3.png");

        break;
    case 4:
        document.querySelector(".player1 img").setAttribute("src", "Alea_4.png");

        break;
    case 5:
        document.querySelector(".player1 img").setAttribute("src", "Alea_5.png");

        break;
    case 6:
        document.querySelector(".player1 img").setAttribute("src", "Alea_6.png");

        break;

    default:
        break;
}

switch (d) {
    case 1:
        document.querySelector(".player2 img").setAttribute("src", "Alea_1.png");

        break;
    case 2:
        document.querySelector(".player2 img").setAttribute("src", "Alea_2.png");

        break;
    case 3:
        document.querySelector(".player2 img").setAttribute("src", "Alea_3.png");

        break;
    case 4:
        document.querySelector(".player2 img").setAttribute("src", "Alea_4.png");

        break;
    case 5:
        document.querySelector(".player2 img").setAttribute("src", "Alea_5.png");

        break;
    case 6:
        document.querySelector(".player2 img").setAttribute("src", "Alea_6.png");

        break;

    default:
        break;
}

if (c === d) {
    document.getElementById("result").innerHTML = "Same numbers ...Please Try Again!"
    document.getElementById("result").style.color = "red"

} else if (c > d) {
    document.getElementById("result").innerHTML = "Congratulations!...Player 1 wins!"
    document.getElementById("result").style.color = "cornsilkx"
} else {
    document.getElementById("result").innerHTML = "Congratulations!...Player 2 wins!"
}

// document.querySelector(".player1 img").setAttribute("src", "Alea_1.png");
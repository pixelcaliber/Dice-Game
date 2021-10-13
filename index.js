    var randomNumber1 = Math.floor(Math.random() * 6 + 1);

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    var src_name = "images/dice" + randomNumber1 + ".png";
    var src_name2 = "images/dice" + randomNumber2 + ".png";

    document.getElementById("myImg1").setAttribute("src", src_name);
    document.getElementById("myImg2").setAttribute("src", src_name2);

    if (randomNumber1 > randomNumber2)
    {
        document.getElementById("hdg").innerHTML = " 🚩 Player 1 wins";
    }
    else if (randomNumber1 < randomNumber2) {
        document.getElementById("hdg").innerHTML = "Player 2 wins  🚩 ";
    }
    else if (randomNumber1 === randomNumber2) {
        document.getElementById("hdg").innerHTML = "DRAW";
    }
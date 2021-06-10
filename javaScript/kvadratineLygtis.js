"use strict";
function func3() {
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
    var a, b, c, d, answer1, answer2;
    d = (b**2 -4*a*c);
    if (d < 0) {
        document.getElementById("rezultatas3").innerHTML = ("nera sprendimo ")
    }
    if (d>0) {
    answer1 = (-b - Math.sqrt(d)) /2/a;
    answer2 = (-b + Math.sqrt(d)) /2/a;
        document.getElementById("rezultatas3").innerHTML = ("atsakymas1 = " + answer1 + ";" + " atsakymas2 = " + answer2);
    }
    if (d==0) {
        answer1 = (-b)/(2*a);
        answer2 = answer1;
        document.getElementById("rezultatas3").innerHTML = ("atsakymas1 = atsakymas2 = " + answer1);
    }
    }

function func1() {
    var a, b, c, skaicius, suma, vidurkis, sandauga;
    var skaicius = Number(document.getElementById("trizenklis").value);
    if(skaicius > 999) {
        alert("NEI")
    }
    else if (skaicius <100) {
        alert("NEI")
    }
    a = Math.floor(skaicius / 100);
    b = Math.floor(skaicius % 100 / 10);
    c = Math.floor(skaicius % 100 % 10);
    suma = (a + b + c);
    vidurkis = (a + b +c) / 3;
    sandauga = (a * b * c);
    console.log(" suma = " + suma +" vidurkis = " + vidurkis + " sandauga = " + sandauga);
    document.getElementById('rezultatas2'). innerHTML = (" suma = " + suma +" vidurkis = " + vidurkis + " sandauga = " + sandauga); }
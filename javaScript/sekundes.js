/*„Javascript sąlygos sakiniai“

1. Suprogramuokite skriptą, kurioje parašius tam tikrą sekundžių kiekį, rodo  24 valandų, minučių, sekundžių formatu.

Papildomai:

*Sekundčių kiekis paimamas iš input HTML žymės laukelio.

*Išveskite konvertuotą sekunžių informacija į div.

*/

"use strict";
function func1() {
  var h, min, sec, sec1
  var sec = Number(document.getElementById("sec").value);
  sec = (sec % 86400)
  h = Math.floor(sec / 3600);
  min = Math.floor(sec % 3600 / 60);
  sec1 = (sec % 3600 % 60);
  document.getElementById('rezultatas1').innerHTML = h + ' val. '+ min + " min. " + sec1 + " sek. ";
  }

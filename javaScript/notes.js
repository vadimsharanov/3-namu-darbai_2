var sec; //выбранный оператор
function func() {
  var result, h, min, sec, sec1;
  var sec = Number(document.getElementById("sec").value);
  sec = (sec % 86400)
  h = Math.floor(sec/3600);
  //h = sec // 3600;
//min = (sec % 3600);
  min = Math.floor(sec % 3600 / 60);
  //min = (sec % 3600) // 60;
  sec1 = (sec % 3600 % 60);
  document.getElementById('rezultatas').innerHTML = h + ' val. ' + min + " min. " + sec1 + " sek. ";
  }

 

/*
h = Math.floor(sec/3600);
    //h = sec // 3600;
 min = (sec % 3600)
    min = Math.floor(sec % 3600 / 60)
    //min = (sec % 3600) // 60;
    sec1 = (sec % 3600 % 60)
    document.getElementById('rezultatas').innerHTML = (sec1);
*/

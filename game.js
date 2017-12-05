
var button_1 = document.getElementById('button_1');
var button_2 = document.getElementById('button_2');
var button_3 = document.getElementById('button_3');
var title = document.getElementById('title');
var intro = document.getElementById('intro');
document.getElementById('button_2').style.display = "none";
document.getElementById('button_3').style.display= "none";


button_1.onclick = startLevel;
button_1.innerHTML = "Start ";

function startLevel() {
  title.innerHTML = "Shit, welke kant moet ik nu op gaan? ";
  button_1.innerHTML = "naar links gaan";
  button_2.innerHTML = "rechtdoor lopen";
  button_3.innerHTML = "naar rechts gaan";
  button_2.style.display = "inline";
  button_3.style.display= "inline";
  document.body.style.background = "url(img/achtergrond1.jpg) no-repeat center center fixed";
  document.body.style.color = "black";
  button_1.onclick = level1;

  button_2.onclick = level2;
}

function level1(){
  title.style.display = "none";
  intro.innerHTML = "je besluit om eerst te gaan eten";
  document.body.style.background = "url(img/img1optie3.jpg) no-repeat center center fixed"
  button_2.style.display = "none";
  button_1.innerHTML = "je besluit om eerst uit te gaan";
  button_1.onclick = function(){
  }
}


function level2(){
title.style.display = "Je komt een bunker tegen"
intro.innerHTML = "Het ziet er heel donker uit in de bunker, toch lijkt het me wel interessant om er een kijkje te nemen."
document.body.style.background = "url(img/optie3vervolg2jpg.jpg) no-repeat center center";
}

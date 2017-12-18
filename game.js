var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var level_title = document.getElementById('level_title');
var level_image = document.getElementById('level_image');
var status = document.getElementById('status');


button1.innerHTML = 'Druk hier om het spel te starten';
level_title.innerHTML = 'Welkom bij mijn spel.';


button2.style.display = "none";

button1.onclick = function(){

	button1.innerHTML = 'Lift';
	button2.style.display = "";
	level_image.src = 'img/achtergrond1.jpg';
	button2.innerHTML = 'Trap';
	level_title.innerHTML = 'Je bent terecht gekomen in de gevaarlijkste stad die er bestaat. Je moet naar beneden, neem je de lift of de trap?';
	button1.onclick = doodlift;
	button2.onclick = leventrap;
}

function doodlift(){
	level_image.src = 'img/lift.jpg';
	level_title.innerHTML = 'Oops, je bent 10 verdiepingen naar beneden gevallen. Je lichaam kon de klap niet hendelen en je botten braken, dit heb je niet overleefd.'
	button1.style.display = 'none'
	button2.style.display = 'none'
}

function leventrap(){
	level_image.src = 'img/druk.jpg'
	level_title.innerHTML = 'Pfoe, veilig buiten. Het is druk op de weg, ga je met de auto of op de fiets?'
	button1.innerHTML = "Auto";
	button2.innerHTML = "Fiets";
	button1.onclick = doodauto;
	button2.onclick = levenfiets;

}

function doodauto(){
	level_title.innerHTML = 'Oh nee he! Je komt keihard in een botsing met een andere auto. Je bent op slag dood.'
	level_image.src = 'img/autoongeluk.jpg'
	button1.style.display = 'none'
	button2.style.display = 'none'

}

function levenfiets(){
	level_image.src = 'img/splitsing.jpg'
	level_title.innerHTML = 'Je hebt 2 routes om de stad uit te komen, door de stad zelf of door de polders?'
	button1.innerHTML = "Stad?";
	button2.innerHTML = "Polder?";
	button1.onclick = levenlinks;
	button2.onclick = doodrechts;


}

function doodrechts(){
	level_title.innerHTML = 'Je band is lek gegaan! Hierdoor gleed je over de grond en kwam je bewusteloos in de sloot, dit deed je de das om'
	level_image.src = 'img/fietssloot.jpg'
	button1.style.display = 'none'
	button2.style.display = 'none'

}
function levenlinks(){
	level_title.innerHTML = 'Het is je succesvol gelukt om de stad uit te komen, het spel is uitgespeeld!'
	level_image.src = 'img/winst.jpg'
	button1.style.display = 'none'
	button2.style.display = 'none'

}

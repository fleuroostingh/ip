var boeken = ["fabeltjeskrant.png", "dikkie_dik.png", "jip_janneke.png", "puk_pettenflat.png"];

var boekImg = document.querySelector('#boek');
var huidigNummerSpan = document.querySelector('#huidig_boek_nummer');
var laatsteNummerSpan = document.querySelector('#laatste_boek_nummer');

var vooruitButton = document.querySelector('#vooruit');
var achteruitButton = document.querySelector('#terug');

var paginaNummer = 0;
var hetBoek = boeken[ paginaNummer ];

boekImg.src = 'images/' + hetBoek;
huidigNummerSpan.textContent = paginaNummer + 1;
laatsteNummerSpan.textContent = boeken.length;


function toonHuidigBoek() {
	if ( paginaNummer > boeken.length -1 ) { //boeken zijn allemaal geweest
		paginaNummer = 0; 
	}
	if ( paginaNummer < 0 ) { // terug langs het eerste boek 
		paginaNummer = boeken.length -1; 
	}
    
	boekImg.src = 'images/' + boeken[paginaNummer];
	huidigNummerSpan.textContent = paginaNummer + 1;
	laatsteNummerSpan.textContent = boeken.length;
}

function bladerVooruit() {
	paginaNummer = paginaNummer + 1;
	toonHuidigBoek();	
}

function bladerAchteruit() {
	paginaNummer = paginaNummer - 1;
	toonHuidigBoek();
}

vooruitButton.addEventListener('click', bladerVooruit);
achteruitButton.addEventListener('click', bladerAchteruit);
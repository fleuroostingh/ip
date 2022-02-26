////////// TV manipulatie

var tv = document.querySelector("#tv_zender");
var tvUit = 0;

function tvKijken(){
    if (tvUit == 0) {
        tv.classList.add("tv_uit");
        tvUit = 1;
    }
    else {
        tv.classList.remove("tv_uit");
        tvUit= 0;
    }
}

tv.addEventListener("click", tvKijken);

///////// Licht manipulatie

var lamp = document.querySelector("#lamp");
var lampAan = 0;
var kamer = document.querySelector("#rendierpagina");

function zetLampAan(){
    if (lampAan == 0) {
        kamer.classList.add('donker');
        lampAan = 1;
    }
    else {
        kamer.classList.remove('donker');
        lampAan = 0;
    }
}

lamp.addEventListener("click", zetLampAan);
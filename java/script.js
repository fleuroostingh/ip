///////////UIL MANIPULATIES
var geluidUil = document.querySelector("#uil_geluid");

function speelUilGeluid() {
    geluidUil.play();
}

function stopUilGeluid() {
    geluidUil.pause();
}

uil.addEventListener("mouseover", speelUilGeluid);
uil.addEventListener("mouseout", stopUilGeluid);

//////////RENDIER MANIPULATIES

var geluidRendier = document.querySelector("#rendier_geluid");

function speelRendierGeluid() {
    geluidRendier.play();
}

function stopRendierGeluid() {
    geluidRendier.pause();
}

rendier.addEventListener("mouseover", speelRendierGeluid);
rendier.addEventListener("mouseout", stopRendierGeluid);


//////////VOS MANIPULATIES

var geluidVos = document.querySelector("#vos_geluid");

function speelVosGeluid() {
    geluidVos.play();
}

function stopVosGeluid() {
    geluidVos.pause();
}

vos.addEventListener("mouseover", speelVosGeluid);
vos.addEventListener("mouseout", stopVosGeluid);


//////////BUTTON GAAT WEG

var beginButton = document.querySelector("#speel_button");

function buttonWeg(){
    document.querySelector("#speel_button").hidden = true;
}

beginButton.addEventListener("click", buttonWeg);
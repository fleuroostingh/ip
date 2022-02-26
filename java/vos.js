var vos = document.querySelector("#vos2");

var energieMeter = [ 
    "energie_100.png",
    "energie_90.png",
    "energie_80.png",
    "energie_70.png",
    "energie_60.png",
    "energie_50.png",
    "energie_40.png",
    "energie_30.png",
    "energie_20.png",
    "energie_10.png",
    "energie_0.png",
];

var meterImg = document.querySelector("#progressbar");
var energieNiveau = 0;

function springOp() {
    if (isMoe() == 0) { //Springt alleen als de vos niet moe is (extra check voor als code breekt)
        vos.classList.add('spring');
        setTimeout( ()=> {
            vos.classList.remove('spring');
        }, 500 );
    
        updateEnergie();
    }
}

function updateEnergie(){
    energieNiveau = energieNiveau + 1;
    meterImg.src = "images/" + energieMeter[energieNiveau];
    isMoe();
}

function isMoe(){
    if (energieNiveau == energieMeter.length -1){
        console.log("ik ben moe");
        vos.classList.add("slapen");
        setTimeout( ()=> {
            vos.classList.remove('slapen');
            energieNiveau = 0;
            meterImg.src = "images/" + energieMeter[energieNiveau];
        }, 2000);

        // Geeft 1 terug als de vos moe is
        return 1;
        console.log("ik ben moe");
    }
    else {
        // Geeft 0 terug als de vos niet moe is
        return 0;
        console.log("ik ben niet moe");
    }
    // geeft aan wat een functie gedaan heeft, ipv hem alleen uit te voeren 

}

vos.addEventListener("click", springOp);
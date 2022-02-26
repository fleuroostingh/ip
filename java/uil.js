var tekst = document.querySelector('#tekst_uil');
var naamInput = document.querySelector('#naam_vragen');

function naarNaamVragen() {
    tekst.textContent = 'Hoi ' + naamInput.value +'. Wat een mooie naam!';
}

naamInput.addEventListener('change' , naarNaamVragen); 

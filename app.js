function moverPosicionRandom(elm){
    elm.style.position= 'absolute'; //va a pasar por toda la pantalla
    elm.style.top= Math.random()*(window.innerHeight - elm.offsetHeight) + 'px';//random * altura del navegador - altura del elemento, pa' que no se salga jsjs
    elm.style.left= Math.random()*(window.innerWidth - elm.offsetWidth) + 'px';

}
let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divHola = document.getElementsByClassName("modo_aja")[0];

btnNo.addEventListener('mouseenter', function(e){ moverPosicionRandom(e.target)})
//el que va escuchando eventos se fija si se puso el cursor, si sí, manda a llamar la funcion moverRandom
btnSi.addEventListener('click', function(e){
    alert('wenas noches uwu ❤')
    divHola.style.display = 'block';
    //const cancion = new Audio('img\\musiquita.mp3');
    //cancion.play();
    btnNo.style.display= 'none';
} )
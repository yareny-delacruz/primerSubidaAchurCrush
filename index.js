//alert("Hola mundo");
let parrafoInicial = document.getElementById("parrafoInicial"); //variables descriptivas
//console.log(parrafoInicial);
//parrafoInicial = 6;
//console.log(parrafoInicial);
//onclick --> evento
parrafoInicial.onclick = function () {
    cambiaColorAleatorio(); //mandar llamar la función
}

function cambiaColorAleatorio() {
    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ]
    console.log(colores[Math.floor(Math.random() * colores.length)]);
    parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)];
}

/* Tipos de datos
let - variable que puede modificarse y tiene scope limitado, saliendo del ámbito en el que se usa, muere - RECOMENDADA
var - se puede modificar y tiene scope global, muere hasta que la pagina c cierra - NO SE RECOMIENDA
const - constante no modificable y tiene scope global
*/

/*CASES -- combinación de mayúsculas y minúsculas -- depende del lenguaje y a qué se le hace referencia
PascalCase - Clases, la primer letra es MAYÚSCULA - JAVITA - Python
camelCase - variables(parrafoInicial), funciones(getElementById()) y para atributos(document). - JS
snake_case - Python, JS - en lugar de espacios, se usa '_', para variables y funciones
CASE - constantes - todo en mayúscula
 */

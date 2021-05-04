//Obtenemos el boton del archivo index.php
var button = document.getElementById('testButton');
//Segundo y tercer button
var button2 = document.getElementById('testButton2');
var button3 = document.getElementById('testButton3');

//Obtenes los valores de los input
var numA = document.getElementsByName("numA")[0].value;
var numB = document.getElementsByName('numB')[0].value;

// Registramos el evento click
button.addEventListener('click', Evento_Click);
//Registro del segundo y tercer button
button2.addEventListener('click', Evento_Click2);
button3.addEventListener('click', Evento_Click3);

//
function Evento_Click() {
document.getElementById('respuesta').innerHTML = "";
alert("Ingresa la siguiente info:");
var verbo=prompt("Escribe un verbo (ej. amar): ");
var adjeti=prompt("Ahora escribe un adjetivo (ej. alto/a): ");
var sustan=prompt("Por último pon un sustantivo (ej. niño/a): ");
/* ESTA LINEA CORRESPONDE A IMPRESION POR CONSOLA
console.log("Cuando te atreves a "+verbo+". El "+sustan+" se vuelve más "+adjeti+".");
*/
document.getElementById('respuesta').innerHTML += "<p>Cuando te atreves a "+verbo+". "+sustan+" se vuelve más "+adjeti+".</p>";
//document.write("<p>Cuando te atreves a "+verbo+". "+sustan+" se vuelve más "+adjeti+".</p>");
}

//Segundo evento click
function Evento_Click2() {
var sumaString = numA+numB;
document.getElementById('respuesta2').value = sumaString;
document.getElementById('mensajeOculto').innerHTML = 'Error, 12 + 13 no es "1213"';
document.getElementById('respuesta3').value = "";
}

//Tercer evento click
function Evento_Click3() {
    var sumaNumerica = parseInt(numA) + parseInt(numB);
    document.getElementById('respuesta3').value = sumaNumerica;
    document.getElementById('mensajeOculto').innerHTML = 'Correcto, el resultado es: "25"';
    document.getElementById('respuesta2').value = "";
    }

var mensaje = "Hola como estas? ";
mensaje +=  "Nos alegra que visites la pagina de nuestra organización. ";
mensaje = mensaje + "Si tienes dudas, anda a la pagina de contacto y mándanos un mensaje.";
console.log(mensaje);
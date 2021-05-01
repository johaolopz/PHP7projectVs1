//Obtenemos el boton del archivo index.php
var button = document.getElementById('testButton');

// Registramos el evento click
button.addEventListener('click', Evento_Click);

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

var mensaje = "Hola como estas? ";
mensaje +=  "Nos alegra que visites la pagina de nuestra organización. ";
mensaje = mensaje + "Si tienes dudas, anda a la pagina de contacto y mándanos un mensaje.";
console.log(mensaje);
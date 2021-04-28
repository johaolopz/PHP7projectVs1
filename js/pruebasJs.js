document.write();
alert("Hola developer!!!, ingresa la siguiente info:");
document.write("<h2>TESTEANDO SCRIPTS</h2><br>");
var verbo=prompt("Escribe un verbo (ej. amar): ");
var adjeti=prompt("Ahora escribe un adjetivo (ej. alto): ");
var sustan=prompt("Por último pon un sustantivo (ej. niño): ");
/* ESTA LINEA CORRESPONDE A IMPRESION POR CONSOLA
console.log("Cuando te atreves a "+verbo+". El "+sustan+" se vuelve más "+adjeti+".");
*/
document.write("<p>Cuando te atreves a "+verbo+". "+sustan+" se vuelve más "+adjeti+".</p>");

var mensaje = "Hola como estas? ";
mensaje +=  "Nos alegra que visites la pagina de nuestra organización. ";
mensaje = mensaje + "Si tienes dudas, anda a la pagina de contacto y mándanos un mensaje.";
console.log(mensaje);
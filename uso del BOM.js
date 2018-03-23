// JavaScript Document

//el BOM (Browser Object Model)

//el objeto Window
window.location.hostname;  //devuelve el host (url) de la pagina actual
window.location.pathname;  //devuelve el path de la pagina actual
window.location.protocol;  //devuelve el protocolo (http) de la pagina actual

window.location.assign("www.google.com");  //asigna una nueva direccion url, sirve para el evento onclick

window.history.back();  //retorna a la pagina anterior del historial, como hacer atra a una pagina, evento onclick
window.history.forward(); //avanza una pagina del historial, coma hacer siguiente en una pagina, evento onclick

window.alert("esto es una alerta de pagina\ncon un salto de pagina"); //esto crea una ventana on un mensaje de alerta
confirm("mensaje de confirmacion");  //crea una ventana de confirmacion con la opcion de "aceptar" y "cancelar"
//funcion del metodo confirm
function confirmacion()
{
	var mensaje="";
	if(confirm("presione un boton")==true)  //verificamos si el usuario presiono aceptar en el mensaje de confirmacion
		mensaje="presiono aceptar";
	else
		mensaje="presiono cancelar";
}
prompt("ingrese su nombre");   //crea una ventana donde pide un dato de entrada
//funcion del metodo prompt
function obtenervalor()
{
	var nombre = prompt("ingrese su nombre");
	var mensaje="";
	if(nombre==null || nombre=="")
	{
		mensaje="no puso ningun valor";
	}
	else
	{
		mensaje="hola "+nombre+" como estas";	
	}
}
//funciones de tiempo
setTimeout(alert("hola putos"),3000);  //el setTimeout permite ejecutar una funcion o parte de codigo despues de un determinado tiempo  setTimeout(funcion(),tiempoen milisegundos)

//para que el setTimeout() sea cancelada se necesita ponerlo en una variable
var f = setTimeout(saludar(),2000);
clearTimeout(f);  //con esto cancelamos la funcion de la variable f

setInterval(hora(),1000); //indicamos que una funcion se repita entre un intervalo de tiempo
//muestra el tiempo segundo por segudo dentro de un alert
function hora()
{
	var d = new Date();
	alert(d.toLocaleTimeString());	
}


//para que el setInterval() sea cancelada se necesita ponerlo en una variable
var hora = setInterval(hora(),1000);
clearInterval(hora);  //con esto cancelamos la funcion de la variable hora

document.getElementById("xxx").style.display="none";  //con esto ocultamos un 


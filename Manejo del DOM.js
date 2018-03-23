// JavaScript Document
//el DOM
//encontrar elementos
var a = document.getElementById("text"); //obtener un elemento por su id
var aa = document.getElementsByClassName("comentario"); //obtener un elemento por su clase
var aaa = document.getElementsByTagName("div");  //obtener un elemento por el nombre de la etiqueta
var aaaa = document.querySelectorAll(".txt"); //obtener todos los elementos segun un determinado selector CSS
//modificacion de elementos
a.innerHTML;  //obtenemos el texto del elemento
a.innerHTML="hola"; //con innerHTML cambiamos el contenido de un elemento. Esto es lo mismo var a=document.getElementById("text").innerHTML="hola";
aa.class="casa"; //document.getElementById(id).attribute = new value cambiamos el valor de un atributo
aaa.src="casa.jpg";
a.style.backgroundColor="red"; // document.getElementById(id).style.property = new style cambiamos el valor de un estilo
aa.style.borderColor="orange";
//forma para poner un evento
aa.addEventListener("onclick",sumar());  //con addEventListener(evento,funcion) anadimos un evento a un elemento, los eventos son los eventos de js. pero sin el "on"
aa.removeEventListener("onclick",sumar()); //elimina un elemento


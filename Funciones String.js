// JavaScript Document
//cadenas de exto y objetos string
var name="chris";
name.length; //devuelve la logitud de la cadena
//poner comillas dentro de un string
var name2 = "yo me llamo \"chris\"";
/*  \" = "
	\' = '
	\\ = \
*/
name == name2; //compara dos cadenas y devuelve un booleano
//podemos establecer una varible string en un nuevo objeto string 
var name3 = new String("chris69"); //la ventaja es que tienes mas funciones
var name4 = new String("lucho");
//los objetos no se puede comparar
name3 == name4; //devuelve falso porque no se pueden comparar
//funciones
var comienzo = name3.indexOf("69"); //busca e indica la posicion donde se encuentra o comienza un caracter o palabra a buscar
var comienzo2 = name3.indexOf("69",0); //de puede pasar la cadena a buscar y de que posicion a buscar
var final = name3.lastIndexOf("chris"); //es lo mismo que el indexof pero comienza desde el final 
var final2 = name3.lastIndexOf("chris",name3.length-2); //se puede poner de donde comenzar
//estos dos metodos indexof y lastindexof devuelven -1 si no encuentran la cadena
var subcdena = name3.slice(5,7); //crea una subcadena (inicio de la palabra, fin de l palabra mas 1) en este caso la subcadena es 69
var subcadena2 = name3.slice(5); //si se pone solo el inicio se crea una subcadena desde ese indice hasta el final de la cadena
var subcadena3 = name3.substring(5,7); //igual que es slice
var replace = name3.replace("chris69","00"); //remplaza una parte de la cadena por otra
var minus = name3.toLowerCase(); //convierte a minusculas
var mayus = name3.toUpperCase(); //convierte a mayuscula
var caracter = name3.charAt(0); //se obtiene un caracter de una cierta posicion
var ascii = name3.charCodeAt(1); //devueve el codigo ascii de un determinado caracter
var cadena = "a,b,c,d";
var array = cadena.split(","); //deulve en un array el split de una cadena
array[0]; // a
var bool = name3.andsWith("69"); //verifica si una cadena termina en una cadena especifica devuelve un valor booleano
var bool2 = name3.includes("69"); //verifica si en una cadena incluye una cadena especifica
var bool3 = name3.startsWith("ch"); // verifica si una cadena comienza con una cadena espacifica
var othercad = name3.repeat(3); //repite una cadena un cierto numero de veces
//otras funciones
/*
big() muestra mas grande una cadena
bold() muestra en negrilla una cadena
italics() muestra en cursiva
fontcolor("green") cambia el color de letra
fontsize(8) cambia el tamano de letra
small() devuelve una cadena mas pequena
link() crea una cadena con una texto de referencia
	var cad = "hola mundo";
	var link = cad.link("www.xvideos.com");
strike() devuelve un texto tachado
sub() devuelve el texto como subindice
sup() devuelve el texto como superindice


*/

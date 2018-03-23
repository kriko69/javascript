// JavaScript Document
//creando fechas como objetos
var d = new Date();
//metodos (saca todo del sistema)
d.toDateString(); //pone en formato entendible
d.getFullYear(); //retorna el solo el año
d.getDay(); //retorna en valor numerico el dia de la semana, siendo domingo 0 y sabado 6
d.getDate(); //retorna la fecha del mes
d.getMonth()+1; //retorna el mes siendo enero 0 y diciembre 11
d.setDate(12); //establece una fecha con el mismo mes y año
d.getHours(); //retorna la hora
d.getMinutes(); //devuelve los minutos
d.getSeconds(); //retorna los segundos

//arrays
var arr = [12,23,34,45,56,67]; //array de enteros
var arr2 = ["hola","a","todos","como estan"]; //array de string
arr[1]; //se obtiene el segundo valor
var a = new Array(1,2,3,4,5); //se puede crear un objeto array para tener mas funciones
//metodos
a.toString(); //retorna el array concatenado por comas en formato string 1,2,3,4,5
a.join(" - "); //une los elementos del array con un separador especifico
a.pop(); //remueve el ultimo valor
a.push(6); //añade un elemento al final de la lista
a.shift(); //remueve el primer elemento del array
a.unshift(12); //añade al comienzo un elemento
a[2]=123; //tambien se puede modificar asi
a.splice(3,0,69); //añade un elemente en una determinada posicion una cierta cantidad de veces (posicion,cantidad,eleemnto1,elemento2,...)
a.splice(2,1); //se puede eliminar elementos solo se pasa la posicion y cuantos elementos (posicion,de cuanto en cuanto)
a.concat(arr); //une dos arrays
var a2 = a.slice(3); //crea otro array desde la posicion indicada
a.length; //indica el tamaño del array
a.sort(); //ordena el aaray
a.reverse(); //muestra de forma inversa
a.indexOf(4); //muestra la posicion donde se encuentra dicho elemento, -1 de lo contrario
a.lastIndexOf(4); //lo mismo que el indexOf pero comienza desde el final

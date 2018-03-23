// JavaScript Document
//numeros
var a = 5;
var b = 7.5;
//se puede usar el exponencial
var a1 = 12e5; //1200000
var b2 = 12e-3; //0.012
//en js existe la variable constante infinite para referirse a infinito
var x = Infinity;
x == 2/0;
//para tener mas metodos se puede crear un objeto number
var z = new Number(45);
//metodos
z.toString(); //devuelve el numero pero en literal
z.toFixed(3); //redondeo a cierto numero de decimales indicados
Number("12"); //convierte un string a numero
parseInt("12"); //convierte string a int
parseFloat("12.5"); //convierte string a float
//la libreria Math
Math.PI
Math.round(3.55); //redondea a cero decimales
Math.ceil(4.3); //redondea al entero mayor (5)
Math.floor(5.8);  //redondea al entero menor (5)
Math.random(); //random
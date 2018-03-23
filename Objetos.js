// JavaScript Document
//objetos en js
//forma 1 de declarar un objeto
var persona =
{
	nombre:"christian",
	apellido:"jimenez",
	edad:20,
	sueldo:200.5
};
//forma 2 de declarar un objeto
var persona2 = new Object();
persona2.nombre="christian";
persona2.apellido="jimenez";
persona2.edad=20;
persona2.sueldo=200.5;
//podemos crear una funcion constructor
function persona3 (nombre,apellido,edad,sueldo)
{
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.sueldo = sueldo;
}
var chris = new persona3("christian","jimenez",20,200.5); //llamamos al constructor
var sueldo = chris.sueldo; //asi accedemos a sus datos
var sueldo2 = chris["sueldo"]; //otra forma de acceder a los datos
//recorrer los datos de un objeto
var todo;
for(x in chris) //con esto decimos que x tiene acceso al objeto chris
{
	todo+=chris[x]+" "; //el la variable todo estamos concatenando todos los datos del objeto chris
}
//modificar u datos del objeto
chris.edad=25;
//borrar un dato del objeto
delete chris.edad;
//los objetos pueden tener funciones en su interior
var luis =
{
	name : "luis",
	age : 25,
	datos : function(){ return "nombre: "+this.name+"\nedad: "+this.age;} //toString
};
luis.datos(); //muestra los datos del objeto
//otra forma seria
function auto (modelo,color,marca)
{
	this.modelo = modelo;
	this.color= color;
	this.marca = marca;
	this.cambiodecolor = function(color){
		this.color=color;
	}
	this.datos = function(){
		return "modelo: "+this.modelo+"\ncolor: "+this.color+"\nmarca: "+this.marca;
	}
}
var vagoneta = new auto(2011,"blanco","toyota");
vagoneta.cambiodecolor("negro");
vagoneta.datos();
//prototype: permite agregar mas funciones o datos declaradas fuera del objeto
auto.prototype.peso=200; //anadimos variables
auto.prototype.mostrarmodelo = function(){ //anadimos funciones
	return this.modelo;
}
auto.prototype.cambmodel = function(modelo){ //anadimos funciones con parametros 
	this.modelo = modelo;
}
vagoneta.mostrarmodelo(); //llamamos a la funcion recien creada




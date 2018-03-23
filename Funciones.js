// JavaScript Document
//funciones
//formas de declarar un funcion
//1
function multi(a,b)
{
	return a*b;
}
//2
var x = function(a,b){return a*b};
var z = x(4,5);
//3
var multiplicar = new Function("parametro1","parametro2","return parametro1*parametro2");
var a = multiplicar(2,3);
var txt = multiplicar.toString(); //retorna en formato string
//se puede retornar el numero de argumentos
function mul(a,b)
{
	return arguments.lenght; //devuelve la cantidad de paramentros
}
//saber los argumentos sirve para funciones que o especifican parametros
function sumar()
{
	var x=0;
	var i=0;
	for(i=0;i<arguments.length;i++)
	{
		x+=arguments[i];
	}
	return x;
}
var todos = sumar(1,2,3,4,5,6,7,8,9);
//4
function minombre(n,a)
{
	this.nombre=n;
	this.apellido=a;
}
var name = new minombre("chris","benoa");
name.nombre; //contiene el nombre
name.apellido //contiene el apellido

function retornomultiple(a,b)
{
  return [++a,++b]; //retorna un array
}
//otra forma
function retornomultiple2(a,b)
{
  return{  //retorna un objeto
    primero:++a,
    segundo:++b
  }
}

var multiple=retornomultiple(5,6);
console.log(multiple[0]);
console.log(multiple[1]);
var multiple2=retornomultiple2(14,15);
console.log(multiple2.primero);
console.log(multiple2.segundo);

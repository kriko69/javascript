// JavaScript Document
//try - catch 
try
{
	adddlert("este es un mensaje");
}
catch(err)
{
	alert(err.message); //mostramos que tipo de error es
}
//errores propios
try
{
	if (x<20) throw "el numero es menor a 20";
	if (x>100) throw "el numero es mayor a 100";
	// document.getElementById('parrafo').innerHTML ya no es necesario poner esto, el mensaje se pone directo a la variable err del catch
}
catch(err)
{
	document.getElementById('parrafo').innerHTML = "Error "+err; //aqui se pone el mensaje del throw
	err.name; //muestras el tipo de error 
	
}
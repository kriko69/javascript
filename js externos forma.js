<script>//en html se usa la etiqueta script para indicar que es codigo javascript 
	function mifuncion()
	{
		document.getElementById("demo").innerHTML="hola mundo";
		//con getElementById("id") indicamos que busca el elemento HTML con id "id" y cambia (innerHTML) el contenido por "hola mundo"
	}
</script>
//los script pueden ser colocados de forma externa tambien
<script src="archivo.js"></script>
//en el archivo.js no puede hacer las etiquetas script


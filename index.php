<!DOCTYPE html>
<html>
<head>
	<title>Página de prueba</title>
	<link type="text/css" rel="stylesheet" href="css/estilo.css">
</head>
<body>
	<!--Comentarios Html-->
	<h1 class="texto">
		<?php
		//Conexion a Base de Datos SQL Server
		$serverName = "JOHAOLOPZ"; //serverName\instanceName

		// Puesto que no se han especificado UID ni PWD en el array  $connectionInfo,
		// La conexión se intentará utilizando la autenticación Windows.
		$connectionInfo = array( "Database"=>"Prueba_1_db");
		$conn = sqlsrv_connect( $serverName, $connectionInfo);

		if( $conn ) {
     		//echo "Conexión establecida.<br>";
		}else{
     		echo "Conexión no se pudo establecer.<br>";
     	die( print_r( sqlsrv_errors(), true));
		}

		/*Comentarios Php*/
		$a="Johao Lopez";
		echo "Hola, $a. Esto es una prueba!!!";
		?>
	</h1><br>
	<h2 class=texto>EL CUENTACUENTOS</h2><br>
	<div class='texto'><button id='testButton'>Vamos!</button></div><br><br>
	<div id='respuesta' class='texto'></div>
</body>
<script type="text/javascript" src="js/pruebasJs.js"></script>
</html>
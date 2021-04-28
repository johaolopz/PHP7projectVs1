<!DOCTYPE html>
<html>
<head>
	<title>Página de prueba</title>
</head>
<body>
	<!--Comentarios Html-->
	<h1>
		<?php
		//Conexion a Base de Datos SQL Server
		$serverName = "JOHAOLOPZ"; //serverName\instanceName

		// Puesto que no se han especificado UID ni PWD en el array  $connectionInfo,
		// La conexión se intentará utilizando la autenticación Windows.
		$connectionInfo = array( "Database"=>"Prueba_1_db");
		$conn = sqlsrv_connect( $serverName, $connectionInfo);

		if( $conn ) {
     		echo "Conexión establecida.<br>";
		}else{
     		echo "Conexión no se pudo establecer.<br>";
     	die( print_r( sqlsrv_errors(), true));
		}

		/*Comentarios Php*/
		$a="Johao Lopez";
		echo "Hola, $a. Esto es una prueba!!!";
		?>
	</h1><br>
</body>
<script type="text/javascript" src="js/pruebasJs.js"></script>
</html>
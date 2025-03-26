<?php
$el_usuario=isset($_GET['usuario']) ? $_GET['usuario'] : $_POST['usuario'];
$el_array = new stdClass();
	if ($el_usuario=="Juan") {
		$el_array->Nombre = "Juan";
		$el_array->Apellido = "Gómez";
		$el_array->Edad = "18";
		$json = json_encode($el_array);
		echo $json;
	}else if($el_usuario== "Maria") {
		$el_array->Nombre = "Maria";
		$el_array->Apellido = "Perez";
		$el_array->Edad = "28";
		$json = json_encode($el_array);
		echo $json;
	}
	else if($el_usuario== "Pedro") {
		$el_array->Nombre = "Pedro";
		$el_array->Apellido = "PInfante";
		$el_array->Edad = "38";
		$json = json_encode($el_array);
		echo $json;
	}
?>
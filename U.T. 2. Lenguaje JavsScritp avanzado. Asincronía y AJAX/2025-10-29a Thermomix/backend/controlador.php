<?php
header("Access-Control-Allow-Origin: *");
header ("Content-type: application/json; charset=utf-8"); 

if (!isset($_GET["operacion"]) || $_GET["operacion"]=="") {
	header('HTTP/ 400 Solicitud incorrecta');
    echo json_encode(array("estado" => "error", "tipo" => "Código de operación incorrecto"));
    exit();
}

if ($_GET["operacion"]!="obtener_libros" && $_GET["operacion"]!="obtener_platos" && $_GET["operacion"]!="obtener_receta") {
	header('HTTP/ 400 Solicitud incorrecta');
    echo json_encode(array("estado" => "error", "tipo" => "Código de operación incorrecto"));
    exit();
}

if ($_GET["operacion"]=="obtener_platos") {
 	if (!isset($_GET["libro"]) || $_GET["libro"]=="") {
		header('HTTP/ 400 Solicitud incorrecta');
	    echo json_encode(array("estado" => "error", "tipo" => "Falta el código de libro"));
	    exit();
	}
}

if ($_GET["operacion"]=="obtener_receta") {
 	if (!isset($_GET["plato"]) || $_GET["plato"]=="") {
		header('HTTP/ 400 Solicitud incorrecta');
	    echo json_encode(array("estado" => "error", "tipo" => "Falta el código de plato"));
	    exit();
	}
}

require_once("./modelo.php");

if ($_GET["operacion"]=="obtener_libros") {
	$libros = obtener_libros();
	if ($libros != null) {
	    header('HTTP/ 200 Libros obtenidos');
	    echo json_encode(array("estado" => "exito", "libros" => $libros));
	} else {
		header('HTTP/ 400 Libros no obtenidos');
	    echo json_encode(array("estado" => "error", "tipo" => "Libros no obtenidos"));
	}
	exit();
}

if ($_GET["operacion"]=="obtener_platos") {
	$platos = obtener_platos($_GET["libro"]);
	if ($platos != null) {
	    header('HTTP/ 200 Platos obtenidos');
	    echo json_encode(array("estado" => "exito", "platos" => $platos));
	} else {
		header('HTTP/ 400 Platos no obtenidos');
	    echo json_encode(array("estado" => "error", "tipo" => "Platos no obtenidos"));
	}
	exit();
}

if ($_GET["operacion"]=="obtener_receta") {
	$receta = obtener_receta($_GET["plato"]);
	if ($receta != null) {
	    header('HTTP/ 200 Receta obtenida');
	    echo json_encode(array("estado" => "exito", "receta" => $receta));
	} else {
		header('HTTP/ 400 Receta no obtenida');
	    echo json_encode(array("estado" => "error", "tipo" => "Receta no obtenida"));
	}
	exit();
}
?>

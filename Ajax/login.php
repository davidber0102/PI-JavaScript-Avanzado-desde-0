<?php
$usu_entrar="Juan";
$contra_entrar="1234";

$el_usuario=isset($_GET['usuario']) ? $_GET['usuario'] : $_POST['usuario'];
$la_contra=isset($_GET['contra']) ? $_GET['contra'] : $_POST['contra'];

if ($el_usuario==$usu_entrar && $la_contra==$contra_entrar) {
  echo 'autorizado';
} else {
  echo 'fallo';
}
?>
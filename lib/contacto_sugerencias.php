<!DOCTYPE html>
<html lang="es">
    <head>
	<meta charset="utf-8">
    </head>	
    <body>
      <form action="contacto_borrar.php" method="post">
      <h2>Buzon de Sugerencias</h2>
	<label>clave:</label>
	<input name="clave" type="text" required="required" size="4" />
	<input type="submit" value="Vaciar Buzon"></p>
      </form>
      <h4>Listado:</h4>
      <?php
      	$texto = file_get_contents("contacto_buzon.txt"); 
	$texto = nl2br($texto); 
	echo $texto
      ?>
      <br>Fin-<br><input type="button" value="Volver" onclick="window.location.href='../index.php';"/>
    </body>
</html>


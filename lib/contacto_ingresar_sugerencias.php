<!DOCTYPE html>
<html lang="es">
    <head>
	<meta charset="utf-8">
	<?php
	    $captchaResult = $_POST["captchaResult"];
	    $firstNumber = $_POST["firstNumber"];
	    $secondNumber = $_POST["secondNumber"];
	    $checkTotal = $firstNumber + $secondNumber;
	    if ($captchaResult == $checkTotal) {
		    $archivo=fopen("contacto_buzon.txt","a") or die(error_get_last());
		    fputs($archivo,"\n");
		    fputs($archivo,"--------------------------------------------------------");
		    fputs($archivo,"\n");
		    fputs($archivo,date("F j, Y, g:i a"));
		    fputs($archivo,"\n");
		    fputs($archivo,"Nombre y Apellido: ");
		    fputs($archivo, $_REQUEST['names']);
		    fputs($archivo,"\n");
		    fputs($archivo,"Cargo: ");
		    fputs($archivo,$_REQUEST['cargo']);
		    fputs($archivo,"\n");
		    fputs($archivo,"Email: ");
		    fputs($archivo,$_REQUEST['email']);
		    fputs($archivo,"\n");
		    fputs($archivo,"Mensaje: ");
		    fputs($archivo,$_REQUEST['message']);
		    fputs($archivo,"\n");
		    fclose($archivo);
		    echo "<script type=\"text/javascript\">alert('Sugerencia enviada. Gracias por su participación'); window.location='../index.php';</script>";  
	    } else {
		    echo "<script type=\"text/javascript\">alert('Error en el Captcha. Intente nuevamente'); window.location='../index.php';</script>";  
	    }
	?>
    </head>
</html>
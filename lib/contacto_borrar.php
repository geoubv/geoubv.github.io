    <?php
    	$maestra = "salassubv2003";
    	$clave = $_POST["clave"];
	if ($clave == $maestra) {
	    $archivo=fopen("contacto_buzon.txt","w") or die("Problemas en la comunicación");
	    fputs($archivo,"");   
	    echo"<script type=\"text/javascript\">alert('Buzon vaciado'); window.location='contacto_sugerencias.php';</script>"; 
	} else { echo "<script type=\"text/javascript\">alert('Incorrecto'); window.location='contacto_sugerencias.php';</script>"; }
    ?>
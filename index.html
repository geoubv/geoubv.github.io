<!DOCTYPE html>
  <html lang="es">
    <head>
	<meta charset="utf-8">
	  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,initial-scale=1" />
	      <meta name="mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-capable" content="yes">
	    <meta name="theme-color" content="#000000">
	  <meta name="description" content="Geoportal Oficial de la Universidad Bolivariana de Venezuela">
	<meta name="author" content="eduguicat@gmail.com" >
	<meta name="twitter:card" content="summary">
	  <meta name="twitter:site" content="@eduguillen28">
	      <meta name="twitter:title" content="Geoportal UBV">
	    <meta name="twitter:description" content="Es una herramienta orientada a facilitar la gestión de información geográfica a través del seguimiento, análisis, desarrollo y valoración de los procesos académicos, socioeducativos, administrativos y territoriales en correspondencia a los Ejes Geopolíticos Regionales UBV">
	  <meta name="twitter:creator" content="@eduguillen28">
	<meta name="twitter:image" content="lib/images/screenshot.jpg">
	<meta property="og:title" content="Geoportal UBV" />
	  <meta property="og:type" content="article" />
	    <meta property="og:url" content="http://genesig.tk/ubv" />
	      <meta property="og:image" content="lib/images/screenshot.jpg" />
	  <meta property="og:description" content="Es una herramienta orientada a facilitar la gestión de información geográfica a través del seguimiento, análisis, desarrollo y valoración de los procesos académicos, socioeducativos, administrativos y territoriales en correspondencia a los Ejes Geopolíticos Regionales UBV" />
	<meta property="og:locale" content="es_ES">

      <title>Geoportal UBV</title>
	<link rel="stylesheet" type="text/css" href="lib/bootstrap.min.css">
	  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	    <link rel="stylesheet" type="text/css" href="lib/leaflet.css">
	      <link rel="stylesheet" type="text/css" href="lib/MarkerCluster.Default.css">
		  <link rel="stylesheet" type="text/css" href="lib/styledLayerControl.css" />
		    <link rel="stylesheet" type="text/css" href="lib/leaflet.draw.css" />
		      <link rel="stylesheet" type="text/css" href="lib/leaflet-measure.css" />
		    <link rel="stylesheet" type="text/css" href="lib/l.gcc_geosearch.css" />
		  <link rel="stylesheet" type="text/css" href="app/app.css">
		<link rel="apple-touch-icon" sizes="76x76" href="lib/images/favicon-76.png">
	      <link rel="apple-touch-icon" sizes="120x120" href="lib/images/favicon-120.png">
	    <link rel="apple-touch-icon" sizes="152x152" href="lib/images/favicon-152.png">
	  <link rel="icon" sizes="196x196" href="lib/images/favicon-196.png">
	<link rel="icon" type="image/x-icon" href="lib/images/favicon.ico">
	    <?php
	      $min_number = 1;
	      $max_number = 15;
	      $random_number1 = mt_rand($min_number, $max_number);
	      $random_number2 = mt_rand($min_number, $max_number);
	    ?>
	</head>
	  <body>

	    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
	      <div class="container-fluid">
		<div class="navbar-header">
			<a class="navbar-brand" href="index.php">Geoportal UBV</a>
			<div class="navbar-icon-container">
				<a href="#" class="navbar-icon pull-right visible-xs" id="nav-btn"><i class="fa fa-bars fa-lg white"></i></a>
				<a href="#" class="navbar-icon pull-right visible-xs" id="sidebar-toggle-btn"><i class="fa fa-search fa-lg white"></i></a>
			</div>
		</div>
		  <div class="navbar-collapse collapse">
		    <ul class="nav navbar-nav">
			<li class="hidden-xs"><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="list-btn"><i class="fa fa-list-ul"></i>&nbsp;&nbsp;Panel de Atributos</a></li>
			<li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="about-btn"><i class="fa fa-globe"></i>&nbsp;&nbsp;Sala Situacional</a></li>  
			<li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="legend-btn"><i class="fa fa-envelope"></i>&nbsp;&nbsp;Contáctenos</a></li>
		    </ul>
		  </div>
		</div>
	      </div>
		<div id="container">
		  <div id="sidebar">
		    <div class="sidebar-wrapper">
		      <div class="panel panel-default" id="features">
			<div class="panel-body">
			  <div class="row">
			    <div class="col-xs-8 col-md-10">
			      <input type="text" class="form-control search" placeholder="Filtrar.." />
				</div>
				  <div class="col-xs-4 col-md-2">
				    <button type="button" class="btn btn-primary pull-right sort" data-sort="feature-name" id="sort-btn"><i class="fa fa-sort"></i></button>
			      </div>
			  </div>
			</div>  	  
		      <div class="sidebar-table">
			<table class="table table-hover" id="feature-list">
			  <thead class="hidden">
			      <tr><th>Icon</th><tr>
			      <tr><th>Name</th><tr>
			    </thead>
			  <tbody class="list"></tbody>
			</table>
		      </div>
		    </div>
		  </div>
		</div>  
	      <div id="map"></div>
	    </div>  
	      <div id="loading">
		<div class="loading-indicator">
		  <div class="progress progress-striped active">
		    <div class="progress-bar progress-bar-info progress-bar-full"></div>
		  </div>
		</div>
		  </div>
		
	      <div class="modal fade" id="aboutModal" tabindex="-1" role="dialog">
	      <div class="modal-dialog modal-lg">
		<div class="modal-content">
		<div class="modal-header">
		  <button class="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
		      <h4 class="modal-title">Bienvenidos</h4>
		    </div>
		  <div class="modal-body">
		    <ul class="nav nav-tabs" id="aboutTabs">
		      <li class="active"><a href="#about" data-toggle="tab"><i class="fa fa-globe"></i>&nbsp;&nbsp;Contenido</a></li>
		      <li><a href="#disclaimer" data-toggle="tab"><i class="fa fa-flag"></i>&nbsp;&nbsp;Créditos</a></li>
		    </ul>
		      <div class="tab-content" id="aboutTabsContent">
			<div id="about" class="tab-pane fade active in" >
			    <p>El geoportal es una herramienta orientada a facilitar la gestión de información geográfica para el desarrollo territorial de la Universidad Bolivariana de Venezuela a través del seguimiento, análisis, desarrollo y valoración de los procesos académicos, sociopolíticos, administrativos y territoriales en correspondencia a los ejes geopolíticos regionales.</p>		    
			    <div class="panel panel-primary">
			    <div class="panel-heading">Acerca de:</div>
				<li class="list-group-item"><a href="docs/EjesGeopoliticosRegionalesUBV.pdf" download="Ejes Geopoliticos Regionales UBV">Documento Los Ejes Geopoliticos Regionales y sus Ejes Municipales - [PDF]</a></li>
				<li class="list-group-item"><a href="docs/RedSalasSituacionales.pdf" download="Red de Salas Situacionales UBV">Red de Salas Situacionales UBV - [PDF]</a></li>		      
				<li class="list-group-item"><a href="docs/DiagramaGEOUBV.pdf" download="Diagrama GEOUBV">Diagrama de diseño para el Geoportal de Proyectos Académicos Comunitarios UBV - [PDF]</a></li>
			    </div>

			  </div>
			  <div id="disclaimer" class="tab-pane fade">
			  <p>
			      <li class="list-group-item">Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps <a href='http://leafletjs.com/'>Leaflet</a></li>
				  <li class="list-group-item">Template for building simple and elegant web mapping applications with Bootstrap and Leaflet <a href='http://bryanmcbride.com'>Bryan McBride</a></li>
				    <li class="list-group-item">Coordinate, linear, and area measure control for Leaflet maps <a href="http://ljagis.github.io/leaflet-measure/" target="_blank">Leaflet Measure Control</a></li>
				    <li class="list-group-item">Flexible JavaScript library that provides a strong foundation for building robust typeaheads <a href="http://twitter.github.io/typeahead.js/" target="_blank">Typeahead</a></li>
				<li class="list-group-item">Leaflet plugins for working with a handful of the most popular ArcGIS Service types <a href="https://github.com/Esri/esri-leaflet" target="_blank">Esri</a></li>
			      </p>
			    <li class="list-group-item">
			      <p ALIGN="CENTER">
				    Universidad Bolivariana de Venezuela<br>
				    Copyleft © 2020 UBV - RIF: G-20003773-3<br>
				    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
			      </p> 
			    </li>
			  </div>
			    
		    </div>
		  </div>
		  <div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div>
		</div>
	      </div>
	    </div>
	    <div class="modal fade" id="legendModal" tabindex="-1" role="dialog">
	      <div class="modal-dialog">
		<div class="modal-content">
		  <div class="modal-header">
		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		    <h4 class="modal-title">Contacto</h4>
		  </div>
		      <div class="modal-body">
			  <form action="lib/contacto_ingresar_sugerencias.php" method="post">
			      <div class="well well-sm">
				<div class="row">
				  <div class="col-md-4">
				    <div class="form-group">
				      <label for="namesl">Nombre y Apellido:</label>
				      <input maxlength="30" type="text" class="form-control" name="names">
				      <label for="cargol">Cargo/Institución:</label>
				      <input maxlength="30" type="text" class="form-control" name="cargo">
				      <label >Email/Teléfono:</label>
				      <input maxlength="30" type="text" class="form-control" name="email">
				    </div>
				  </div>
				  <div class="col-md-8">
				    <label for="messagesl">Mensaje:</label>
				    <textarea maxlength="200" required="required" class="form-control" rows="8" name="message"></textarea>
				  </div>
				  <div class="col-md-4">
				  <label>Captcha:</label><br>
                      <?php echo $random_number1 . ' + ' . $random_number2 . ' = '; ?>
				      <input name="captchaResult" type="text" size="2" maxlength="2" required="required"  />
				      <input name="firstNumber" type="hidden" value="<?php echo $random_number1; ?>" />
				      <input name="secondNumber" type="hidden" value="<?php echo $random_number2; ?>" />
				    </div> 
				<div class="col-md-12">
				    <p><br><input type="submit" class="btn btn-primary pull-right" value="Enviar"></p>
				  </div>
				</div>
			      </div>
			    <p ALIGN="CENTER"><li class="list-group-item">Pronto recibirá una respuesta. Para mayor información comunicarse a la Sala Situacional de Rectorado a los teléfonos: (0212)606.30.90 o al correo electrónico: <a href="mailto:salasituacional@ubv.edu.ve?Subject=Sobre%20el%20Geoportal.." target="_top">salasituacional@ubv.edu.ve</a></li></p> 
			    </form>			  </div>
			  <div class="modal-footer">
		      <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
		  </div>
		</div>
	      </div>
	    </div>
		<div class="modal fade" id="featureModal" tabindex="-1" role="dialog">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
			<button class="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
			  <h4 class="modal-title text-primary" id="feature-title"></h4>
		      </div>
			  <div class="modal-body" id="feature-info"></div>
			    <div class="modal-footer">
			      <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
			    </div>
			  </div>
			</div>
		      </div>
		    </div>
		  </div>
		  <div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button></div>
		</div>
	      </div>
	    </div>
	      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.js"></script>
		<script type="text/javascript" src="lib/jquery-2.1.4.min.js"></script>
		  <script type="text/javascript" src="lib/styledLayerControl.js"></script>
		    <script type="text/javascript" src="lib/leaflet.draw.js"></script>
		      <script type="text/javascript" src="lib/leaflet-measure.js"></script>
			<script type="text/javascript" src="lib/gcc_geosearch.js"></script>
			  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCOJ_t8YaGtT7BKh6oK1UgCEkTlByh_92k&libraries=places"></script>
			    <script type="text/javascript" src="lib/esri-leaflet.js"></script>
			    <script type="text/javascript" src="lib/bootstrap.min.js"></script>
			  <script type="text/javascript" src="lib/typeahead.bundle.min.js"></script>
		      <script type="text/javascript" src="lib/handlebars.min.js"></script>
		    <script type="text/javascript" src="lib/list.min.js"></script>
		  <script type="text/javascript" src="lib/leaflet.markercluster.js"></script>
	      <script type="text/javascript" src="app/app-min.js"></script>
    </body>
  </html>

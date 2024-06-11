var map, featureList, uni_veSearch = [], comunas_venSearch = [], aldeas_guaSearch = [];
/*Events*/
	$(window).resize(function() { sizeLayerControl(); });
	$(document).on("click", ".feature-row", function(e) {
	$(document).off("mouseout", ".feature-row", clearHighlight);sidebarClick(parseInt($(this).attr("id"), 10));});
	$(document).on("mouseover", ".feature-row", function(e) {highlight.clearLayers().addLayer(L.circleMarker([$(this).attr("lat"), $(this).attr("lng")], highlightStyle));});
	$(document).on("mouseout", ".feature-row", clearHighlight);
	$("#about-btn").click(function() {
	$("#aboutModal").modal("show");
	$(".navbar-collapse.in").collapse("hide");return false;});
	$("#legend-btn").click(function() {
	$("#legendModal").modal("show");
	$(".navbar-collapse.in").collapse("hide");return false;});
	$("#login-btn").click(function() {
	$("#loginModal").modal("show");
	$(".navbar-collapse.in").collapse("hide");return false;});
	$("#list-btn").click(function() {
	$('#sidebar').toggle();map.invalidateSize();return false;});
	$("#nav-btn").click(function() {
	$(".navbar-collapse").collapse("toggle");return false;});
	$("#sidebar-toggle-btn").click(function() { $("#sidebar").toggle(); map.invalidateSize(); return false;	});
	$("#sidebar-hide-btn").click(function() {$('#sidebar').hide(); map.invalidateSize(); });
	$("#sidebar").hide();
/* Single marker cluster layer to hold all clusters */
	var markerClusters = new L.MarkerClusterGroup({spiderfyOnMaxZoom: true,showCoverageOnHover: false,zoomToBoundsOnClick: true, disableClusteringAtZoom: 14 });	    
/* Side bar */
 	function sizeLayerControl() { $(".leaflet-control-layers").css("max-height", $("#map").height() - 50);}
	function clearHighlight() {highlight.clearLayers();}
	function sidebarClick(id) 
	{
		var layer = markerClusters.getLayer(id);
		map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 17);
		layer.fire("click");
		/* Hide sidebar and go to the map on small screens */
		if (document.body.clientWidth <= 767) {
		    $("#sidebar").hide();
		    map.invalidateSize();
		}
	}
//Universidad Bolivariana de Venezuela
	var edifubv = L.geoJson(null, 
	{
	    pointToLayer: function (feature, latlng) 
	    {
	    return L.marker(latlng, {
		    icon: L.icon({
			  iconUrl: "lib/images/ubv.png",
			  iconSize: [32, 32],
			  iconAnchor: [12, 28],
			  popupAnchor: [0, -25]
		      }),
		      title: feature.properties.EDO+' '+ feature.properties.TIPO,
		      riseOnHover: true
		    });
	    },
	    onEachFeature: function (feature, layer) 
	    {
		  if (feature.properties) {
		  var content = '<table class="table table-striped table-bordered table-condensed">' +
		  		'<tr><th>Estado</th><td>' + feature.properties.EDO + '</td></tr>' + 
				'<tr><th>Tipo</th><td>' + feature.properties.TIPO + '</td></tr>' +
				'<tr><th>Direccion</th><td>' + feature.properties.INFO + '</td></tr>' + 
				'<tr><th>Imagen</th><td><IMG id="pic" align="center" height="200px" width="300px" src="data/imagenes/sedesubv/'+ feature.properties['ID'] +
				'.jpeg"></td></tr></table>';
		  layer.on({
		    click: function (e) {
			    $("#feature-title").html("Edificio UBV "+feature.properties.TIPO);
			    $("#feature-info").html(content);
			    $("#featureModal").modal("show");
			    highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
		      }
		  });

		  }
	    }
	});
	$.getJSON("data/geojson/edifubv.geojson", function (data) { edifubv.addData(data); });
//Universidades 2014
	var uni_veLayer = L.geoJson(null);
	var uni_ves = L.geoJson(null, 
	{
	    pointToLayer: function (feature, latlng) 
	    {
	    return L.marker(latlng, {
		    icon: L.icon({
			  iconUrl: "lib/images/uni_ve.png",
			  iconSize: [22, 22],
			  iconAnchor: [12, 28],
			  popupAnchor: [0, -25]
		      }),
		      title: feature.properties.Name,
		      riseOnHover: true
		    });
	    },
	    onEachFeature: function (feature, layer) 
	    {
		  if (feature.properties) {
		  var content = "<table class='table table-striped table-bordered table-condensed'>" +
				"<tr><th>Nombre</th><td>" + feature.properties.Name + "</td></tr>" + 
				"<tr><th>Tipo</th><td>" + feature.properties.TIPO + "</td></tr>" +
				"<tr><th>Direccion</th><td>" + feature.properties.DIRECCION + "</td></tr>" + 
				"<tr><th>Sitio Web</th><td><a class='url-break' href='http://www.google.com/search?ie=UTF-8&oe=UTF-8&sourceid=navclient&gfns=1&q=" + feature.properties.Name + "' target='_blank'>" + feature.properties.Name + "</a></td></tr>" + "<table>";
		  layer.on({
		    click: function (e) {
			    $("#feature-title").html(feature.properties.Name);
			    $("#feature-info").html(content);
			    $("#featureModal").modal("show");
			    highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
		      }
		  });
		  $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="lib/images/uni_ve.png"></td><td class="feature-name">' + layer.feature.properties.Name+ '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		  uni_veSearch.push({
			name: layer.feature.properties.Name,
			address: layer.feature.properties.TIPO,
			source: "uni_ves",
			id: L.stamp(layer),
			lat: layer.feature.geometry.coordinates[1],
			lng: layer.feature.geometry.coordinates[0]
		  });
		  }
	    }
	});
	$.getJSON("data/geojson/uni_ve.geojson", function (data) { uni_ves.addData(data); });
//Comunas 2014
	var comunas_venLayer = L.geoJson(null);
	var comunas_vens = L.geoJson(null, 
	{
	    pointToLayer: function (feature, latlng) 
	    {
		    return L.marker(latlng, {
		    icon: L.icon({
		    iconUrl: "lib/images/comunas_ven.png",
		    iconSize: [22, 22],
		    iconAnchor: [12, 28],
		    popupAnchor: [0, -25]
		  }),
		  title: feature.properties.Nombre,
		  riseOnHover: true
		});
	    },
	  onEachFeature: function (feature, layer) 
	      {
		if (feature.properties) {
		  var content = "<table class='table table-striped table-bordered table-condensed'>" +
		  "<tr><th>Codigo de Registro</th><td>" + feature.properties.Cod_reg + "</td></tr>" + 
		  "<tr><th>Estado</th><td>" + feature.properties.Estado + "</td></tr>" + 
		  "<tr><th>Municipio</th><td>" + feature.properties.Municipio + "</td></tr>" + 
		  "<tr><th>Parroquia</th><td>" + feature.properties.Parroquia + "</td></tr>" + 
		  "<tr><th>Nombre de la Comuna</th><td>" + feature.properties.Nombre + "</td></tr>" + 
		  "<tr><th>Tipo</th><td>" + feature.properties.Tipo + "</td></tr>" + 
		  "<tr><th>Fecha de Registro</th><td>" + feature.properties.Fecha_reg + "</td></tr>" + 
		  "<tr><th>Consejos Comunales</th><td>" + feature.properties.Num_cc + "</td></tr>" + 
		  "<tr><th>Familias</th><td>" + feature.properties.familias + "</td></tr>" + 
		  "<tr><th>Sitio Web</th><td><a class='url-break' href='http://www.google.com/search?ie=UTF-8&oe=UTF-8&sourceid=navclient&gfns=1&q=Comuna " + feature.properties.Nombre + "' target='_blank'>" + feature.properties.URL + "</a></td></tr>"+ 
		  "<table>";
		  layer.on({
		      click: function (e) {
			      $("#feature-title").html(feature.properties.Nombre);
			      $("#feature-info").html(content);
			      $("#featureModal").modal("show");
		      highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
		    }
		  });
		  $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="lib/images/comunas_ven.png"></td><td class="feature-name">' + layer.feature.properties.Nombre + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		  comunas_venSearch.push({
			  name: layer.feature.properties.Nombre,
			  address: layer.feature.properties.Tipo,
			  source: "comunas_vens",
			  id: L.stamp(layer),
			  lat: layer.feature.geometry.coordinates[1],
			  lng: layer.feature.geometry.coordinates[0]
		  });
		}
	      }
	});
	$.getJSON("data/geojson/comunas_ven.geojson", function(data) {comunas_vens.addData(data);});
//Aldeas Guaicaipuro 2014
	var aldeas_guaLayer = L.geoJson(null);
	var aldeas_gua = L.geoJson(null, 
	{
	    pointToLayer: function (feature, latlng) 
	    {
	    return L.marker(latlng, {
		    icon: L.icon({
			  iconUrl: "lib/images/aldeas_gua.png",
			  iconSize: [22, 22],
			  iconAnchor: [12, 28],
			  popupAnchor: [0, -25]
		      }),
		      title: feature.properties.Name,
		      riseOnHover: true
		    });
	    },
	    onEachFeature: function (feature, layer) 
	    {
		  if (feature.properties) {
		  var content = "<table class='table table-striped table-bordered table-condensed'>" +
				"<tr><th>Nombre</th><td>" + feature.properties.Name + "</td></tr>" + 
				"<tr><th>Direccion</th><td>" + feature.properties.DIRECCION + "</td></tr>" + 
				"<tr><th>Contacto</th><td><a class='url-break' href='http://www.google.com/search?ie=UTF-8&oe=UTF-8&sourceid=navclient&gfns=1&q=Aldea Universitaria" + feature.properties.Name + "' target='_blank'>" + feature.properties.web + "</a></td></tr>" + "<table>";
		  layer.on({
		    click: function (e) {
			    $("#feature-title").html("Aldea Universitaria UBV- Mision Sucre - "+feature.properties.Name);
			    $("#feature-info").html(content);
			    $("#featureModal").modal("show");
			    highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
		      }
		  });
		  $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="lib/images/aldeas_gua.png"></td><td class="feature-name">' + layer.feature.properties.Name+ '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		  aldeas_guaSearch.push({
			name: layer.feature.properties.Name,
			source: "aldeas_gua",
			id: L.stamp(layer),
			lat: layer.feature.geometry.coordinates[1],
			lng: layer.feature.geometry.coordinates[0]
		  });
		  }
	    }
	});
	$.getJSON("data/geojson/aldeas_gua.geojson", function (data) { aldeas_gua.addData(data); });

/* Puntos Socioeducativos - Barra Lateral */
	function syncSidebar() 
	{ 
		$("#feature-list tbody").empty();
		
		//Universidades Nacionales	
		uni_ves.eachLayer(function (layer) {
		  if (map.hasLayer(uni_veLayer)) {
		      if (map.getBounds().contains(layer.getLatLng())) {
		      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="lib/images/uni_ve.png"></td><td class="feature-name">' + layer.feature.properties.Name + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		      }
		  }
		});
		
		//Comunas Venezuela
		comunas_vens.eachLayer(function (layer) {
		  if (map.hasLayer(comunas_venLayer)) {
		      if (map.getBounds().contains(layer.getLatLng())) {
		    $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="lib/images/comunas_ven.png"></td><td class="feature-name">' + layer.feature.properties.Nombre + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		      }
		  }
		});

		//Aldeas Guaicaipuro	
		aldeas_gua.eachLayer(function (layer) {
		  if (map.hasLayer(aldeas_guaLayer)) {
		      if (map.getBounds().contains(layer.getLatLng())) {
		      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="lib/images/aldeas_gua.png"></td><td class="feature-name">' + layer.feature.properties.Name + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		      }
		  }
		});
		
		featureList = new List("features", {valueNames: ["feature-name"]});
		featureList.sort("feature-name", {order: "asc"});	
	}
	
/* Basemap Layers */
	var attrib = " Universidad Bolivariana de Venezuela";
	var osm = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: attrib + "|<a href='http://www.openstreetmap.org/#map=2/23.9/-6.0&layers=C'>Mapa OpenStreet</a>"});
	var topo = L.tileLayer('http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png', {attribution: attrib + "|<a href='http://thunderforest.com/'>Maps for Apps</a>"});
	var satlabels =  L.layerGroup([L.esri.basemapLayer('Imagery'),L.esri.basemapLayer('ImageryLabels')]);
				   
/* Overlay Layers */
	var highlight = L.geoJson(null);
	var highlightStyle = {stroke: false,fillColor: "#00FFFF",fillOpacity: 0.7,radius: 10};

/*Map constructor */
	var boundsgua = [[9.66357,-67.4711],[10.6496,-65.4294]];
	var boundsajs = [[11.18,-61.847],[10.0321,-64.5289]];
	var boundsmar = [[11.8512,-70.0423],[8.36825,-73.3795]];	
	var boundscca = [[9.3282,-69.6126],[6.93435,-72.4898]];
	var boundsjfr = [[10.584,-64.7769],[7.68517,-68.4878]];	
	var boundsjch = [[12.198,-68.2198],[9.39001,-70.9758]];
	var boundsjua = [[10.3152,-59.8021],[7.75543 ,-65.7241]];
	var boundsker = [[8.95018,-60.246],[3.5258,-65.507]];
	var boundsmai = [[9.97539,-67.752],[7.3234,-71.0458]];
	var boundsroa = [[8.69744,-63.3557],[0.644106,-70.3733]];
	var boundsegr = [[0.644045387225,-73.3793879998],[12.1979113972,-58.145981]];
	var map = L.map("map", {crs: L.CRS.EPSG3857 , 
			center: [7.406, -65.984], 
			maxZoom: 18, 
			minZoom: 3, 
			zoom: 5,
			layers: [osm, markerClusters],
			attributionControl: true,
		        measureControl: true,
			zoomControl:true });
			map.fitBounds(boundsegr);
/* Raster Ejes */			
	var overlayeregr = new L.ImageOverlay("data/raster/egr.png", boundsegr, { opacity: 0.5});
	var overlayerlim = new L.ImageOverlay("data/raster/lim.png", boundsegr, { opacity: 0.7}).addTo(map);
	var overlayergua = new L.ImageOverlay("data/raster/gua.png", boundsgua, { opacity: 0.5});
	var overlayerajs = new L.ImageOverlay("data/raster/ajs.png", boundsajs, { opacity: 0.5});
	var overlayermar = new L.ImageOverlay("data/raster/mar.png", boundsmar, { opacity: 0.5});
	var overlayercca = new L.ImageOverlay("data/raster/cca.png", boundscca, { opacity: 0.5});
	var overlayerjfr = new L.ImageOverlay("data/raster/jfr.png", boundsjfr, { opacity: 0.5});
	var overlayerjch = new L.ImageOverlay("data/raster/jch.png", boundsjch, { opacity: 0.5});
	var overlayerjua = new L.ImageOverlay("data/raster/jua.png", boundsjua, { opacity: 0.5});
	var overlayerker = new L.ImageOverlay("data/raster/ker.png", boundsker, { opacity: 0.5});
	var overlayermai = new L.ImageOverlay("data/raster/mai.png", boundsmai, { opacity: 0.6});
	var overlayerroa = new L.ImageOverlay("data/raster/roa.png", boundsroa, { opacity: 0.6});
				  
//Map Tools
	L.control.scale({options: {position:'bottomright',maxWidth: 100,metric: true,imperial: true,updateWhenIdle: true}}).addTo(map);
	map.on('startfollowing', function() {map.on('dragstart', lc._stopFollowing, lc); }).on('stopfollowing', function() {map.off('dragstart', lc._stopFollowing, lc); }); 
	L.control.searchControl().addTo(map);
	var drawnItems = new L.FeatureGroup();
	var drawControl = new L.Control.Draw({draw: { position: 'topleft', polygon: { title: 'Dibuja el poligono', allowIntersection: false, drawError: { color: '#b00b00', timeout: 1000}, shapeOptions: { color: '#0009FF' }, showArea: true }, polyline: { metric: true},circle: { shapeOptions: {color: '#29CB00' }}},edit: { featureGroup: drawnItems }});
	map.addLayer(drawnItems);
	map.addControl(drawControl);
	map.on('draw:created', function (e) { 
	  var type = e.layerType,layer = e.layer; 
	  if (type === 'marker') {
	    var urlll = layer.getLatLng().lat+ ' ' + layer.getLatLng().lng;	
	    layer.bindPopup('<b>Latitud-Longitud:</b><br><input type="text" style="height:30px"  id="urlcopy" type="text" value="'+ urlll + '"/><br><a href="http://www.openstreetmap.org/search?query='+ urlll +'">      Ver en OSM</a>')
	}
	drawnItems.addLayer(layer);});

/* Layer control listeners that allow for a single markerClusters layer */
	map.on("overlayadd", function(e) {

	  if (e.layer === uni_veLayer) {
	    markerClusters.addLayer(uni_ves);
	    syncSidebar();
	  }
	  if (e.layer === comunas_venLayer) {
	    markerClusters.addLayer(comunas_vens);
	    syncSidebar();
	  }
	  if (e.layer === aldeas_guaLayer) {
	    markerClusters.addLayer(aldeas_gua);
	    syncSidebar();
	  }
	});

	map.on("overlayremove", function(e) {

	  if (e.layer === uni_veLayer) {
	    markerClusters.removeLayer(uni_ves);
	    syncSidebar();
	  }
	  if (e.layer === comunas_venLayer) {
	    markerClusters.removeLayer(comunas_vens);
	    syncSidebar();
	  }
	  if (e.layer === aldeas_guaLayer) {
	    markerClusters.removeLayer(aldeas_gua);
	    syncSidebar();
	  }
	});
	
	/* Filter sidebar feature list to only show features in current map bounds */
	map.on("moveend", function (e) { syncSidebar();	});
	/* Clear feature highlight when map is clicked */
	map.on("click", function(e) { highlight.clearLayers();});
	/* Larger screens get expanded layer control and visible sidebar */
	if (document.body.clientWidth <= 767) {var isCollapsed = true;} else {var isCollapsed = false;}
	/* Mapa popup */
	map.on('measurefinish', function (e) { var type = e.layerType,layer = e.layer; });
	  
/* Base Layers Control */
	var bases = 
	[
	    { 
		groupName: "Mapas Base",
		expanded : false,
		layers   : {
			 "Callejero": osm,
			 //"Topográfico": topo,
			 "Satelital": satlabels		  
		}
	    }
	];  
	var capas = 
	[
	    {
		groupName : "Ejes Regionales UBV",
		expanded : false,
		layers    : {
			      "EGR Nacional": overlayeregr
		}
	    }, {
		groupName : "Ejes Municipales UBV",
		expanded : false,
		layers    : {
			      "EGR Cacique Guaicaipuro": overlayergua,
			      "EGR Antonio Jose De Sucre": overlayerajs,
			      "EGR Cacique Mara": overlayermar,
			      "EGR Cipriano Castro": overlayercca,
			      "EGR Jose Felix Ribas": overlayerjfr,
			      "EGR Jose Leonardo Chirinos": overlayerjch,
			      "EGR Juana La Avanzadora": overlayerjua, 
			      "EGR Kerepacupai Vena": overlayerker, 
			      "EGR Guerrillero Maisanta": overlayermai,
			      "EGR Rios Orinoco-Apure": overlayerroa
		}
	    },
	    {
		groupName : "Puntos Socioeducativos",
		expanded : true,
		layers    : {
			    "<img src='lib/images/ubv.png' width='24' height='24'>&nbsp;Universidad Bolivariana": edifubv, 
			    "<img src='lib/images/uni_ve.png' width='22' height='22'>&nbsp;Universidades Nacionales": uni_veLayer , 
			    "<img src='lib/images/comunas_ven.png' width='24' height='24'>&nbsp;Comunas Constituidas": comunas_venLayer,
			    "<img src='lib/images/aldeas_gua.png' width='18' height='18'>&nbsp;Aldeas Guaicaipuro": aldeas_guaLayer
		}
	    }    
	];
	var options = {
		container_width     : "100%",
		group_maxHeight     : "100%",
		collapsed: true, 
		exclusive: false		
	};	
	var controlx = L.Control.styledLayerControl(bases, capas, options).addTo(map);
	/* preloaded layers */
	map.on('zoomend', function () 
	{
	  if (map.getZoom() >= 7 && map.hasLayer(overlayerlim)== true) 
	  {
	      map.removeLayer(overlayerlim);
	  }
	  if (map.getZoom() <= 7 && map.hasLayer(overlayerlim) == false)
	  {
	      map.addLayer(overlayerlim);
	  }   
	});

	edifubv.addTo(map);
	/* Highlight search box text on click */
	$("#searchbox").click(function () {$(this).select();});
	/* Prevent hitting enter from refreshing the page */
	$("#searchbox").keypress(function (e) { if (e.which == 13){e.preventDefault();}});
	$("#featureModal").on("hidden.bs.modal", function (e) {$(document).on("mouseout", ".feature-row", clearHighlight);});
	
//Legend Creator
	var leyenda_egr = L.control({position:"bottomleft"});
	leyenda_egr.onAdd = function (map) 
	{
	    var div = L.DomUtil.create('div', 'info-legend');
	    div.innerHTML = '<img height="100%" width="100%" src="data/imagenes/leyendas/leyegr.png"></img>'    
	    return div;
	};
	
	var leyenda_gua = L.control({position:"bottomright"});
	leyenda_gua.onAdd = function (map) 
	{
	    var div = L.DomUtil.create('div', 'info-legend');
	    div.innerHTML = '<img height="100%" width="100%" src="data/imagenes/leyendas/leygua.png"></img>'    
	    return div;
	};
	
	var leyenda_ajs = L.control({position:"bottomright"});
	leyenda_ajs.onAdd = function (map) 
	{
	    var div = L.DomUtil.create('div', 'info-legend');
	    div.innerHTML = '<img height="100%" width="100%" src="data/imagenes/leyendas/leyajs.png"></img>'    
	    return div;
	};
	var leyenda_mar = L.control({position:"bottomright"});
	leyenda_mar.onAdd = function (map) 
	{
	    var div = L.DomUtil.create('div', 'info-legend');
	    div.innerHTML = '<img height="100%" width="100%" src="data/imagenes/leyendas/leymar.png"></img>'    
	    return div;
	};
	var leyenda_cca = L.control({position:"bottomright"});
	leyenda_cca.onAdd = function (map) 
	{
	    var div = L.DomUtil.create('div', 'info-legend');
	    div.innerHTML = '<img height="100%" width="100%" src="data/imagenes/leyendas/leycca.png"></img>'    
	    return div;
	};
	var leyenda_jfr = L.control({position:"bottomright"});
	leyenda_jfr.onAdd = function (map) 
	{
	    var div = L.DomUtil.create('div', 'info-legend');
	    div.innerHTML = '<img height="100%" width="100%" src="data/imagenes/leyendas/leyjfr.png"></img>'    
	    return div;
	};
	var leyenda_jch = L.control({position:"bottomright"});
	leyenda_jch.onAdd = function (map) 
	{
	    var div = L.DomUtil.create('div', 'info-legend');
	    div.innerHTML = '<img height="100%" width="100%" src="data/imagenes/leyendas/leyjch.png"></img>'    
	    return div;
	};
	var leyenda_jua = L.control({position:"bottomright"});
	leyenda_jua.onAdd = function (map) 
	{
	    var div = L.DomUtil.create('div', 'info-legend');
	    div.innerHTML = '<img height="100%" width="100%" src="data/imagenes/leyendas/leyjua.png"></img>'    
	    return div;
	};
	var leyenda_ker = L.control({position:"bottomright"});
	leyenda_ker.onAdd = function (map) 
	{
	    var div = L.DomUtil.create('div', 'info-legend');
	    div.innerHTML = '<img height="100%" width="100%" src="data/imagenes/leyendas/leyker.png"></img>'    
	    return div;
	};
	var leyenda_mai = L.control({position:"bottomright"});
	leyenda_mai.onAdd = function (map) 
	{
	    var div = L.DomUtil.create('div', 'info-legend');
	    div.innerHTML = '<img height="100%" width="100%" src="data/imagenes/leyendas/leymai.png"></img>'    
	    return div;
	};
	var leyenda_roa = L.control({position:"bottomright"});
	leyenda_roa.onAdd = function (map) 
	{
	    var div = L.DomUtil.create('div', 'info-legend');
	    div.innerHTML = '<img height="100%" width="100%" src="data/imagenes/leyendas/leyroa.png"></img>'    
	    return div;
	};	

//Layers Event ADD On CLick
	map.on('overlayadd', function (eventLayer) 
	{
	  switch(eventLayer.name) 
	      {	
		case 'EGR Nacional':
		      leyenda_egr.addTo(map);
		break;
		case 'EGR Cacique Guaicaipuro':
		      leyenda_gua.addTo(map);
		break;
		case 'EGR Antonio Jose De Sucre':
		      leyenda_ajs.addTo(map);
		break;
		case 'EGR Cacique Mara':
		      leyenda_mar.addTo(map);
		break;
		case 'EGR Cipriano Castro':
		      leyenda_cca.addTo(map);
		break;
		case 'EGR Jose Felix Ribas':
		      leyenda_jfr.addTo(map);
		break;
		case 'EGR Jose Leonardo Chirinos':
		      leyenda_jch.addTo(map);
		break;
		case 'EGR Juana La Avanzadora':
		      leyenda_jua.addTo(map);
		break;
		case 'EGR Kerepacupai Vena':
		      leyenda_ker.addTo(map);
		break;
		case 'EGR Guerrillero Maisanta':
		      leyenda_mai.addTo(map);
		break;
		case 'EGR Rios Orinoco-Apure':
		      leyenda_roa.addTo(map);
		break;	
	      } 
	});
	
//Layers Events REMOVE On Remove
	map.on('overlayremove', function (eventLayer) 
	{
	      switch(eventLayer.name) 
	      {
		case 'EGR Nacional':
		      map.removeControl(leyenda_egr);
		break;
		case 'EGR Cacique Guaicaipuro':
		      map.removeControl(leyenda_gua);
		break;
		case 'EGR Antonio Jose De Sucre':
		      map.removeControl(leyenda_ajs);
		break;
		case 'EGR Cacique Mara':
		      map.removeControl(leyenda_mar);
		break;
		case 'EGR Cipriano Castro':
		      map.removeControl(leyenda_cca);
		break;
		case 'EGR Jose Felix Ribas':
		      map.removeControl(leyenda_jfr);
		break;
		case 'EGR Jose Leonardo Chirinos':
		      map.removeControl(leyenda_jch);
		break;
		case 'EGR Juana La Avanzadora':
		      map.removeControl(leyenda_jua);
		break;
		case 'EGR Kerepacupai Vena':
		      map.removeControl(leyenda_ker);
		break;
		case 'EGR Guerrillero Maisanta':
		      map.removeControl(leyenda_mai);
		break;
		case 'EGR Rios Orinoco-Apure':
		      map.removeControl(leyenda_roa);
		break;	
	      }
	});

/* Typeahead search functionality */
	$(document).one("ajaxStop", function () 
	{
		  $("#loading").hide();
		  sizeLayerControl();
		   
		  var comunas_vensBH = new Bloodhound({
		    name: "comunas_vens",
		    datumTokenizer: function (d) {
		      return Bloodhound.tokenizers.whitespace(d.name);
		    },
		    queryTokenizer: Bloodhound.tokenizers.whitespace,
		    local: comunas_venSearch,
		    limit: 10
		  });
		  
		  var uni_vesBH = new Bloodhound({
		    name: "uni_ves",
		    datumTokenizer: function (d) {
		      return Bloodhound.tokenizers.whitespace(d.name);
		    },
		    queryTokenizer: Bloodhound.tokenizers.whitespace,
		    local: uni_veSearch,
		    limit: 10
		  });
		  
		  var aldeas_guaBH = new Bloodhound({
		    name: "aldeas_gua",
		    datumTokenizer: function (d) {
		      return Bloodhound.tokenizers.whitespace(d.name);
		    },
		    queryTokenizer: Bloodhound.tokenizers.whitespace,
		    local: aldeas_guaSearch,
		    limit: 10
		  });
		  
		  aldeas_guaBH.initialize();
		  comunas_vensBH.initialize();		  
		  uni_vesBH.initialize();

	      /* instantiate the typeahead UI */
		  $("#searchbox").typeahead({
		    minLength: 3,
		    highlight: true,
		    hint: true
		  }, 
		  {
		    name: "uni_ves",
		    displayKey: "name",
		    source: uni_vesBH.ttAdapter(),
		    templates: {
		    header: "<h4 class='typeahead-header'><img src='lib/images/uni_ve.png' width='24' height='28'>&nbsp;uni_ves</h4>",
		    suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
		    }
		  }, {
		    name: "comunas_vens",
		    displayKey: "name",
		    source: comunas_vensBH.ttAdapter(),
		    templates: {
		    header: "<h4 class='typeahead-header'><img src='lib/images/comunas_ven.png' width='24' height='28'>&nbsp;comunas_vens</h4>",
		    suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
		    }
		  }, {
		    name: "aldeas_gua",
		    displayKey: "name",
		    source: aldeas_guaBH.ttAdapter(),
		    templates: {
		    header: "<h4 class='typeahead-header'><img src='lib/images/aldeas_gua.png' width='24' height='28'>&nbsp;aldeas_gua</h4>",
		    suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
		    }
		  }
		    
		  ).on("typeahead:selected", function (obj, datum) {
		    if (datum.source === "uni_ves"){
			if (!map.hasLayer(uni_veLayer)) {  map.addLayer(uni_veLayer);} map.setView([datum.lat, datum.lng], 17);
			if (map._layers[datum.id]) {map._layers[datum.id].fire("click");}
		    }
		    if (datum.source === "comunas_vens") {
		      if (!map.hasLayer(comunas_venLayer)) { map.addLayer(comunas_venLayer);} map.setView([datum.lat, datum.lng], 17);
		      if (map._layers[datum.id]) { map._layers[datum.id].fire("click"); }
		    }
		    if (datum.source === "aldeas_gua") {
		      if (!map.hasLayer(aldeas_guaLayer)) { map.addLayer(aldeas_guaLayer);} map.setView([datum.lat, datum.lng], 17);
		      if (map._layers[datum.id]) { map._layers[datum.id].fire("click"); }
		    }
		    if ($(".navbar-collapse").height() > 50) 
		    {
			$(".navbar-collapse").collapse("hide");
		    }
		    }).on("typeahead:opened", function () {
			$(".navbar-collapse.in").css("max-height", $(document).height() - $(".navbar-header").height());
			$(".navbar-collapse.in").css("height", $(document).height() - $(".navbar-header").height());
		      }).on("typeahead:closed", function () {
			$(".navbar-collapse.in").css("max-height", "");
			$(".navbar-collapse.in").css("height", "");
		      });
			$(".twitter-typeahead").css("position", "static");
			$(".twitter-typeahead").css("display", "block");
	});

/* Leaflet patch to make layer control scrollable on touch browsers */
	var container = $(".leaflet-control-layers")[0];
	if (!L.Browser.touch) {
	    L.DomEvent
	    .disableClickPropagation(container)
	    .disableScrollPropagation(container);
	} else {
	    L.DomEvent.disableClickPropagation(container);
	}
	  
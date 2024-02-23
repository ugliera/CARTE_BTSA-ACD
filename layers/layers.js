var wms_layers = [];

var format_dep_france_0 = new ol.format.GeoJSON();
var features_dep_france_0 = format_dep_france_0.readFeatures(json_dep_france_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dep_france_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dep_france_0.addFeatures(features_dep_france_0);
var lyr_dep_france_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dep_france_0, 
                style: style_dep_france_0,
                interactive: true,
                title: '<img src="styles/legend/dep_france_0.png" /> dep_france'
            });
var format_fusiontotalitCOPIE_1 = new ol.format.GeoJSON();
var features_fusiontotalitCOPIE_1 = format_fusiontotalitCOPIE_1.readFeatures(json_fusiontotalitCOPIE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fusiontotalitCOPIE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fusiontotalitCOPIE_1.addFeatures(features_fusiontotalitCOPIE_1);
var lyr_fusiontotalitCOPIE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fusiontotalitCOPIE_1, 
                style: style_fusiontotalitCOPIE_1,
                interactive: true,
    title: 'fusion totalité. COPIE<br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_0.png" /> CFA<br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_1.png" /> CFPPA <br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_2.png" /> ECOLE<br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_3.png" /> ELEFPA<br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_4.png" /> IAHP<br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_5.png" /> INSTITUT<br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_6.png" /> LAP<br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_7.png" /> LEAP<br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_8.png" /> LEGTA<br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_9.png" /> LEGTPA<br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_10.png" /> LYCEE<br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_11.png" /> MFR<br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_12.png" /> MFREO<br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_13.png" /> SITE<br />\
    <img src="styles/legend/fusiontotalitCOPIE_1_14.png" /> <br />'
        });

lyr_dep_france_0.setVisible(true);lyr_fusiontotalitCOPIE_1.setVisible(true);
var layersList = [lyr_dep_france_0,lyr_fusiontotalitCOPIE_1];
lyr_dep_france_0.set('fieldAliases', {'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', });
lyr_fusiontotalitCOPIE_1.set('fieldAliases', {'uai': 'uai', 'nom': 'nom', 'region': 'region', 'departemen': 'departemen', 'adresse': 'adresse', 'adresse1': 'adresse1', 'adresse2': 'adresse2', 'code_posta': 'code_posta', 'commune': 'commune', 'telephone': 'telephone', 'email': 'email', 'x': 'x', 'y': 'y', 'typ': 'typ', 'TYPE': 'TYPE', 'numb': 'numb', 'x1': 'x1', 'y1': 'y1', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', 'id1': 'id1', });
lyr_dep_france_0.set('fieldImages', {'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', });
lyr_fusiontotalitCOPIE_1.set('fieldImages', {'uai': 'TextEdit', 'nom': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'adresse': 'TextEdit', 'adresse1': 'TextEdit', 'adresse2': 'TextEdit', 'code_posta': 'TextEdit', 'commune': 'TextEdit', 'telephone': 'TextEdit', 'email': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'typ': 'TextEdit', 'TYPE': 'TextEdit', 'numb': 'TextEdit', 'x1': 'TextEdit', 'y1': 'TextEdit', 'auxiliar_1': 'TextEdit', 'auxiliar_2': 'TextEdit', 'id1': 'TextEdit', });
lyr_dep_france_0.set('fieldLabels', {'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', });
lyr_fusiontotalitCOPIE_1.set('fieldLabels', {'uai': 'no label', 'nom': 'inline label', 'region': 'no label', 'departemen': 'no label', 'adresse': 'no label', 'adresse1': 'no label', 'adresse2': 'no label', 'code_posta': 'no label', 'commune': 'no label', 'telephone': 'no label', 'email': 'no label', 'x': 'no label', 'y': 'no label', 'typ': 'no label', 'TYPE': 'no label', 'numb': 'no label', 'x1': 'no label', 'y1': 'no label', 'auxiliar_1': 'no label', 'auxiliar_2': 'no label', 'id1': 'no label', });
lyr_fusiontotalitCOPIE_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
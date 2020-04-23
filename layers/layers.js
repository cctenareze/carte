var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Transport_1 = new ol.format.GeoJSON();
var features_Transport_1 = format_Transport_1.readFeatures(json_Transport_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transport_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Transport_1.addFeatures(features_Transport_1);var lyr_Transport_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transport_1, 
                style: style_Transport_1,
                title: '<img src="styles/legend/Transport_1.png" /> Transport'
            });var format_Commercesdeservices_2 = new ol.format.GeoJSON();
var features_Commercesdeservices_2 = format_Commercesdeservices_2.readFeatures(json_Commercesdeservices_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commercesdeservices_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Commercesdeservices_2.addFeatures(features_Commercesdeservices_2);var lyr_Commercesdeservices_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Commercesdeservices_2, 
                style: style_Commercesdeservices_2,
                title: '<img src="styles/legend/Commercesdeservices_2.png" /> Commerces de services'
            });var format_Sant_3 = new ol.format.GeoJSON();
var features_Sant_3 = format_Sant_3.readFeatures(json_Sant_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sant_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Sant_3.addFeatures(features_Sant_3);var lyr_Sant_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sant_3, 
                style: style_Sant_3,
                title: '<img src="styles/legend/Sant_3.png" /> Santé'
            });var format_Commercesdedtail_4 = new ol.format.GeoJSON();
var features_Commercesdedtail_4 = format_Commercesdedtail_4.readFeatures(json_Commercesdedtail_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commercesdedtail_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Commercesdedtail_4.addFeatures(features_Commercesdedtail_4);var lyr_Commercesdedtail_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Commercesdedtail_4, 
                style: style_Commercesdedtail_4,
                title: '<img src="styles/legend/Commercesdedtail_4.png" /> Commerces de détail'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Transport_1.setVisible(true);lyr_Commercesdeservices_2.setVisible(true);lyr_Sant_3.setVisible(true);lyr_Commercesdedtail_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Transport_1,lyr_Commercesdeservices_2,lyr_Sant_3,lyr_Commercesdedtail_4];
lyr_Transport_1.set('fieldAliases', {'code posta': 'code posta', 'commune': 'Commune', 'qui': 'Nom', 'quoi': 'Type', 'catégorie': 'Catégorie', 'obs': 'Observations', 'adresse': 'Adresse', 'numéro': 'Téléphone', 'mail': 'Email', 'Site': 'Site', });
lyr_Commercesdeservices_2.set('fieldAliases', {'code posta': 'code posta', 'commune': 'Commune', 'qui': 'Nom', 'quoi': 'Type', 'catégorie': 'Catégorie', 'obs': 'Observations', 'adresse': 'Adresse', 'numéro': 'Téléphone', 'mail': 'Email', 'Site': 'Site', });
lyr_Sant_3.set('fieldAliases', {'code posta': 'code posta', 'commune': 'Commune', 'qui': 'Nom', 'quoi': 'Type', 'catégorie': 'Catégorie', 'obs': 'Observations', 'adresse': 'Adresse', 'numéro': 'Téléphone', 'mail': 'Email', 'Site': 'Site', });
lyr_Commercesdedtail_4.set('fieldAliases', {'code posta': 'code posta', 'commune': 'Commune', 'qui': 'Nom', 'quoi': 'Type', 'catégorie': 'Catégorie', 'obs': 'Observations', 'adresse': 'Adresse', 'numéro': 'Téléphone', 'mail': 'Email', 'Site': 'Site', });
lyr_Transport_1.set('fieldImages', {'code posta': 'TextEdit', 'commune': 'TextEdit', 'qui': 'TextEdit', 'quoi': 'TextEdit', 'catégorie': 'TextEdit', 'obs': 'TextEdit', 'adresse': 'TextEdit', 'numéro': 'TextEdit', 'mail': 'TextEdit', 'Site': 'TextEdit', });
lyr_Commercesdeservices_2.set('fieldImages', {'code posta': 'TextEdit', 'commune': 'TextEdit', 'qui': 'TextEdit', 'quoi': 'TextEdit', 'catégorie': 'TextEdit', 'obs': 'TextEdit', 'adresse': 'TextEdit', 'numéro': 'TextEdit', 'mail': 'TextEdit', 'Site': 'TextEdit', });
lyr_Sant_3.set('fieldImages', {'code posta': 'TextEdit', 'commune': 'TextEdit', 'qui': 'TextEdit', 'quoi': 'TextEdit', 'catégorie': 'TextEdit', 'obs': 'TextEdit', 'adresse': 'TextEdit', 'numéro': 'TextEdit', 'mail': 'TextEdit', 'Site': 'TextEdit', });
lyr_Commercesdedtail_4.set('fieldImages', {'code posta': 'TextEdit', 'commune': 'TextEdit', 'qui': 'TextEdit', 'quoi': 'TextEdit', 'catégorie': 'TextEdit', 'obs': 'TextEdit', 'adresse': 'TextEdit', 'numéro': 'TextEdit', 'mail': 'TextEdit', 'Site': 'TextEdit', });
lyr_Transport_1.set('fieldLabels', {'code posta': 'no label', 'commune': 'inline label', 'qui': 'inline label', 'quoi': 'inline label', 'catégorie': 'inline label', 'obs': 'inline label', 'adresse': 'inline label', 'numéro': 'inline label', 'mail': 'inline label', 'Site': 'no label', });
lyr_Commercesdeservices_2.set('fieldLabels', {'code posta': 'no label', 'commune': 'inline label', 'qui': 'inline label', 'quoi': 'inline label', 'catégorie': 'inline label', 'obs': 'inline label', 'adresse': 'inline label', 'numéro': 'inline label', 'mail': 'inline label', 'Site': 'no label', });
lyr_Sant_3.set('fieldLabels', {'code posta': 'no label', 'commune': 'inline label', 'qui': 'inline label', 'quoi': 'inline label', 'catégorie': 'inline label', 'obs': 'inline label', 'adresse': 'inline label', 'numéro': 'inline label', 'mail': 'inline label', 'Site': 'no label', });
lyr_Commercesdedtail_4.set('fieldLabels', {'code posta': 'no label', 'commune': 'inline label', 'qui': 'inline label', 'quoi': 'inline label', 'catégorie': 'inline label', 'obs': 'inline label', 'adresse': 'inline label', 'numéro': 'inline label', 'mail': 'inline label', 'Site': 'no label', });
lyr_Commercesdedtail_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
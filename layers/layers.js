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
    title: 'Transport<br />\
    <img src="styles/legend/Transport_1_0.png" /> Transport<br />'
        });var format_Sant_2 = new ol.format.GeoJSON();
var features_Sant_2 = format_Sant_2.readFeatures(json_Sant_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sant_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Sant_2.addFeatures(features_Sant_2);var lyr_Sant_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sant_2, 
                style: style_Sant_2,
    title: 'Santé<br />\
    <img src="styles/legend/Sant_2_0.png" /> Santé<br />'
        });var format_Commercesdeservices_3 = new ol.format.GeoJSON();
var features_Commercesdeservices_3 = format_Commercesdeservices_3.readFeatures(json_Commercesdeservices_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commercesdeservices_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Commercesdeservices_3.addFeatures(features_Commercesdeservices_3);var lyr_Commercesdeservices_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Commercesdeservices_3, 
                style: style_Commercesdeservices_3,
    title: 'Commerces de services<br />\
    <img src="styles/legend/Commercesdeservices_3_0.png" /> Commerces de services<br />'
        });var format_Commercededtail_4 = new ol.format.GeoJSON();
var features_Commercededtail_4 = format_Commercededtail_4.readFeatures(json_Commercededtail_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commercededtail_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Commercededtail_4.addFeatures(features_Commercededtail_4);var lyr_Commercededtail_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Commercededtail_4, 
                style: style_Commercededtail_4,
    title: 'Commerce de détail<br />\
    <img src="styles/legend/Commercededtail_4_0.png" /> Commerce de détail<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Transport_1.setVisible(true);lyr_Sant_2.setVisible(true);lyr_Commercesdeservices_3.setVisible(true);lyr_Commercededtail_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Transport_1,lyr_Sant_2,lyr_Commercesdeservices_3,lyr_Commercededtail_4];
lyr_Transport_1.set('fieldAliases', {'code posta': 'code posta', 'commune': 'Commune', 'qui': 'Nom', 'quoi': 'Type', 'catégorie': 'Catégorie', 'obs': 'Observations', 'adresse': 'Adresse', 'numéro': 'Téléphone', 'mail': 'Email', 'Site': 'Site', });
lyr_Sant_2.set('fieldAliases', {'code posta': 'code posta', 'commune': 'Commune', 'qui': 'Nom', 'quoi': 'Type', 'catégorie': 'Catégorie', 'obs': 'Observations', 'adresse': 'Adresse', 'numéro': 'Téléphone', 'mail': 'Email', 'Site': 'Site', });
lyr_Commercesdeservices_3.set('fieldAliases', {'code posta': 'code posta', 'commune': 'Commune', 'qui': 'Nom', 'quoi': 'Type', 'catégorie': 'Catégorie', 'obs': 'Observations', 'adresse': 'Adresse', 'numéro': 'Téléphone', 'mail': 'Email', 'Site': 'Site', });
lyr_Commercededtail_4.set('fieldAliases', {'code posta': 'code posta', 'commune': 'Commune', 'qui': 'Nom', 'quoi': 'Type', 'catégorie': 'Catégorie', 'obs': 'Observations', 'adresse': 'Adresse', 'numéro': 'Téléphone', 'mail': 'Email', 'Site': 'Site', });
lyr_Transport_1.set('fieldImages', {'code posta': 'TextEdit', 'commune': 'TextEdit', 'qui': 'TextEdit', 'quoi': 'TextEdit', 'catégorie': 'TextEdit', 'obs': 'TextEdit', 'adresse': 'TextEdit', 'numéro': 'TextEdit', 'mail': 'TextEdit', 'Site': 'TextEdit', });
lyr_Sant_2.set('fieldImages', {'code posta': 'TextEdit', 'commune': 'TextEdit', 'qui': 'TextEdit', 'quoi': 'TextEdit', 'catégorie': 'TextEdit', 'obs': 'TextEdit', 'adresse': 'TextEdit', 'numéro': 'TextEdit', 'mail': 'TextEdit', 'Site': 'TextEdit', });
lyr_Commercesdeservices_3.set('fieldImages', {'code posta': 'TextEdit', 'commune': 'TextEdit', 'qui': 'TextEdit', 'quoi': 'TextEdit', 'catégorie': 'TextEdit', 'obs': 'TextEdit', 'adresse': 'TextEdit', 'numéro': 'TextEdit', 'mail': 'TextEdit', 'Site': 'TextEdit', });
lyr_Commercededtail_4.set('fieldImages', {'code posta': 'TextEdit', 'commune': 'TextEdit', 'qui': 'TextEdit', 'quoi': 'TextEdit', 'catégorie': 'TextEdit', 'obs': 'TextEdit', 'adresse': 'TextEdit', 'numéro': 'TextEdit', 'mail': 'TextEdit', 'Site': 'TextEdit', });
lyr_Transport_1.set('fieldLabels', {'code posta': 'no label', 'commune': 'inline label', 'qui': 'inline label', 'quoi': 'inline label', 'catégorie': 'inline label', 'obs': 'inline label', 'adresse': 'inline label', 'numéro': 'inline label', 'mail': 'inline label', 'Site': 'inline label', });
lyr_Sant_2.set('fieldLabels', {'code posta': 'no label', 'commune': 'inline label', 'qui': 'inline label', 'quoi': 'inline label', 'catégorie': 'inline label', 'obs': 'inline label', 'adresse': 'inline label', 'numéro': 'inline label', 'mail': 'inline label', 'Site': 'inline label', });
lyr_Commercesdeservices_3.set('fieldLabels', {'code posta': 'no label', 'commune': 'inline label', 'qui': 'inline label', 'quoi': 'inline label', 'catégorie': 'inline label', 'obs': 'inline label', 'adresse': 'inline label', 'numéro': 'inline label', 'mail': 'inline label', 'Site': 'inline label', });
lyr_Commercededtail_4.set('fieldLabels', {'code posta': 'no label', 'commune': 'inline label', 'qui': 'inline label', 'quoi': 'inline label', 'catégorie': 'inline label', 'obs': 'inline label', 'adresse': 'inline label', 'numéro': 'inline label', 'mail': 'inline label', 'Site': 'inline label', });
lyr_Commercededtail_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
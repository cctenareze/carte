var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource__1.addFeatures(features__1);var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
    title: '<br />\
    <img src="styles/legend/_1_0.png" /> Transport<br />'
        });var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource__2.addFeatures(features__2);var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
    title: '<br />\
    <img src="styles/legend/_2_0.png" /> Santé<br />'
        });var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource__3.addFeatures(features__3);var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
    title: '<br />\
    <img src="styles/legend/_3_0.png" /> Commerces de services<br />'
        });var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource__4.addFeatures(features__4);var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
    title: '<br />\
    <img src="styles/legend/_4_0.png" /> Commerce de détail<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1,lyr__2,lyr__3,lyr__4];
lyr__1.set('fieldAliases', {'code posta': 'code posta', 'commune': 'Commune', 'qui': 'Nom', 'quoi': 'Type', 'catégorie': 'Catégorie', 'obs': 'Observations', 'adresse': 'Adresse', 'numéro': 'Téléphone', 'mail': 'Email', 'Site': 'Site', });
lyr__2.set('fieldAliases', {'code posta': 'code posta', 'commune': 'Commune', 'qui': 'Nom', 'quoi': 'Type', 'catégorie': 'Catégorie', 'obs': 'Observations', 'adresse': 'Adresse', 'numéro': 'Téléphone', 'mail': 'Email', 'Site': 'Site', });
lyr__3.set('fieldAliases', {'code posta': 'code posta', 'commune': 'Commune', 'qui': 'Nom', 'quoi': 'Type', 'catégorie': 'Catégorie', 'obs': 'Observations', 'adresse': 'Adresse', 'numéro': 'Téléphone', 'mail': 'Email', 'Site': 'Site', });
lyr__4.set('fieldAliases', {'code posta': 'code posta', 'commune': 'Commune', 'qui': 'Nom', 'quoi': 'Type', 'catégorie': 'Catégorie', 'obs': 'Observations', 'adresse': 'Adresse', 'numéro': 'Téléphone', 'mail': 'Email', 'Site': 'Site', });
lyr__1.set('fieldImages', {'code posta': 'TextEdit', 'commune': 'TextEdit', 'qui': 'TextEdit', 'quoi': 'TextEdit', 'catégorie': 'TextEdit', 'obs': 'TextEdit', 'adresse': 'TextEdit', 'numéro': 'TextEdit', 'mail': 'TextEdit', 'Site': 'TextEdit', });
lyr__2.set('fieldImages', {'code posta': 'TextEdit', 'commune': 'TextEdit', 'qui': 'TextEdit', 'quoi': 'TextEdit', 'catégorie': 'TextEdit', 'obs': 'TextEdit', 'adresse': 'TextEdit', 'numéro': 'TextEdit', 'mail': 'TextEdit', 'Site': 'TextEdit', });
lyr__3.set('fieldImages', {'code posta': 'TextEdit', 'commune': 'TextEdit', 'qui': 'TextEdit', 'quoi': 'TextEdit', 'catégorie': 'TextEdit', 'obs': 'TextEdit', 'adresse': 'TextEdit', 'numéro': 'TextEdit', 'mail': 'TextEdit', 'Site': 'TextEdit', });
lyr__4.set('fieldImages', {'code posta': 'TextEdit', 'commune': 'TextEdit', 'qui': 'TextEdit', 'quoi': 'TextEdit', 'catégorie': 'TextEdit', 'obs': 'TextEdit', 'adresse': 'TextEdit', 'numéro': 'TextEdit', 'mail': 'TextEdit', 'Site': 'TextEdit', });
lyr__1.set('fieldLabels', {'code posta': 'no label', 'commune': 'inline label', 'qui': 'inline label', 'quoi': 'inline label', 'catégorie': 'inline label', 'obs': 'inline label', 'adresse': 'inline label', 'numéro': 'inline label', 'mail': 'inline label', 'Site': 'inline label', });
lyr__2.set('fieldLabels', {'code posta': 'no label', 'commune': 'inline label', 'qui': 'inline label', 'quoi': 'inline label', 'catégorie': 'inline label', 'obs': 'inline label', 'adresse': 'inline label', 'numéro': 'inline label', 'mail': 'inline label', 'Site': 'inline label', });
lyr__3.set('fieldLabels', {'code posta': 'no label', 'commune': 'inline label', 'qui': 'inline label', 'quoi': 'inline label', 'catégorie': 'inline label', 'obs': 'inline label', 'adresse': 'inline label', 'numéro': 'inline label', 'mail': 'inline label', 'Site': 'inline label', });
lyr__4.set('fieldLabels', {'code posta': 'no label', 'commune': 'inline label', 'qui': 'inline label', 'quoi': 'inline label', 'catégorie': 'inline label', 'obs': 'inline label', 'adresse': 'inline label', 'numéro': 'inline label', 'mail': 'inline label', 'Site': 'inline label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
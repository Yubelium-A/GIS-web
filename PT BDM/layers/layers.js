var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSattelite_1 = new ol.layer.Tile({
            'title': 'Google Sattelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Blok_2 = new ol.format.GeoJSON();
var features_Blok_2 = format_Blok_2.readFeatures(json_Blok_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blok_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blok_2.addFeatures(features_Blok_2);
var lyr_Blok_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Blok_2, 
                style: style_Blok_2,
                popuplayertitle: 'Blok',
                interactive: true,
    title: 'Blok<br />\
    <img src="styles/legend/Blok_2_0.png" /> Blok 2<br />\
    <img src="styles/legend/Blok_2_1.png" /> Blok 4<br />\
    <img src="styles/legend/Blok_2_2.png" /> Blok 5<br />\
    <img src="styles/legend/Blok_2_3.png" /> Blok 8<br />' });
var format_KawasanHutan_3 = new ol.format.GeoJSON();
var features_KawasanHutan_3 = format_KawasanHutan_3.readFeatures(json_KawasanHutan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanHutan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanHutan_3.addFeatures(features_KawasanHutan_3);
var lyr_KawasanHutan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanHutan_3, 
                style: style_KawasanHutan_3,
                popuplayertitle: 'Kawasan Hutan',
                interactive: true,
    title: 'Kawasan Hutan<br />\
    <img src="styles/legend/KawasanHutan_3_0.png" /> Hutan Produksi Tetap<br />\
    <img src="styles/legend/KawasanHutan_3_1.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/KawasanHutan_3_2.png" /> Hutan Produksi yang Dapat Dikonversi<br />\
    <img src="styles/legend/KawasanHutan_3_3.png" /> Area Penggunaan Lain<br />' });
var format_Jalan_4 = new ol.format.GeoJSON();
var features_Jalan_4 = format_Jalan_4.readFeatures(json_Jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_4.addFeatures(features_Jalan_4);
var lyr_Jalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_4, 
                style: style_Jalan_4,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_4.png" /> Jalan'
            });
var format_IUP_PTBDM_5 = new ol.format.GeoJSON();
var features_IUP_PTBDM_5 = format_IUP_PTBDM_5.readFeatures(json_IUP_PTBDM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUP_PTBDM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUP_PTBDM_5.addFeatures(features_IUP_PTBDM_5);
var lyr_IUP_PTBDM_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUP_PTBDM_5, 
                style: style_IUP_PTBDM_5,
                popuplayertitle: 'IUP_PT BDM',
                interactive: true,
                title: '<img src="styles/legend/IUP_PTBDM_5.png" /> IUP_PT BDM'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSattelite_1.setVisible(true);lyr_Blok_2.setVisible(true);lyr_KawasanHutan_3.setVisible(true);lyr_Jalan_4.setVisible(true);lyr_IUP_PTBDM_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSattelite_1,lyr_Blok_2,lyr_KawasanHutan_3,lyr_Jalan_4,lyr_IUP_PTBDM_5];
lyr_Blok_2.set('fieldAliases', {'Id': 'Id', 'Blok': 'Blok', 'SD': 'SD', 'Cadangan': 'Cadangan', 'Ni': 'Ni', 'Waste': 'Waste', 'MKR': 'MKR', });
lyr_KawasanHutan_3.set('fieldAliases', {'fungsikws': 'fungsikws', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', 'Field': 'Field', 'Luas': 'Luas', 'Fungsi': 'Fungsi', 'Area': 'Area', });
lyr_Jalan_4.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Panjang': 'Panjang', });
lyr_IUP_PTBDM_5.set('fieldAliases', {'Id': 'Id', });
lyr_Blok_2.set('fieldImages', {'Id': 'Range', 'Blok': 'TextEdit', 'SD': 'TextEdit', 'Cadangan': 'TextEdit', 'Ni': 'TextEdit', 'Waste': 'TextEdit', 'MKR': 'TextEdit', });
lyr_KawasanHutan_3.set('fieldImages', {'fungsikws': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', 'Field': 'TextEdit', 'Luas': 'TextEdit', 'Fungsi': 'TextEdit', 'Area': 'TextEdit', });
lyr_Jalan_4.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Panjang': '', });
lyr_IUP_PTBDM_5.set('fieldImages', {'Id': 'Range', });
lyr_Blok_2.set('fieldLabels', {'Id': 'hidden field', 'Blok': 'inline label - always visible', 'SD': 'inline label - always visible', 'Cadangan': 'inline label - always visible', 'Ni': 'inline label - always visible', 'Waste': 'inline label - always visible', 'MKR': 'inline label - always visible', });
lyr_KawasanHutan_3.set('fieldLabels', {'fungsikws': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', 'Field': 'hidden field', 'Luas': 'hidden field', 'Fungsi': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_Jalan_4.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Panjang': 'inline label - always visible', });
lyr_IUP_PTBDM_5.set('fieldLabels', {'Id': 'hidden field', });
lyr_IUP_PTBDM_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
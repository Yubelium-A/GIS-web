var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
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
var format_IUP_BDM_2 = new ol.format.GeoJSON();
var features_IUP_BDM_2 = format_IUP_BDM_2.readFeatures(json_IUP_BDM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUP_BDM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUP_BDM_2.addFeatures(features_IUP_BDM_2);
var lyr_IUP_BDM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUP_BDM_2, 
                style: style_IUP_BDM_2,
                popuplayertitle: 'IUP_BDM',
                interactive: true,
                title: '<img src="styles/legend/IUP_BDM_2.png" /> IUP_BDM'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleSattelite_1.setVisible(true);lyr_IUP_BDM_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSattelite_1,lyr_IUP_BDM_2];
lyr_IUP_BDM_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetype': 'EntLinetype', 'LyrLnType': 'LyrLnType', 'BlkLinetype': 'BlkLinetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'Shape_Length': 'Shape_Length', });
lyr_IUP_BDM_2.set('fieldImages', {'OBJECTID': 'Range', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetype': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'Range', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'Range', 'ExtX': 'Range', 'ExtY': 'Range', 'ExtZ': 'Range', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'TextEdit', 'DocId': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_IUP_BDM_2.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetype': 'no label', 'LyrLnType': 'no label', 'BlkLinetype': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'Shape_Length': 'no label', });
lyr_IUP_BDM_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
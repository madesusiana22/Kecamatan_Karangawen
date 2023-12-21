var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Adm_Kec_Karangawen_1 = new ol.format.GeoJSON();
var features_Adm_Kec_Karangawen_1 = format_Adm_Kec_Karangawen_1.readFeatures(json_Adm_Kec_Karangawen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adm_Kec_Karangawen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adm_Kec_Karangawen_1.addFeatures(features_Adm_Kec_Karangawen_1);
var lyr_Adm_Kec_Karangawen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Adm_Kec_Karangawen_1, 
                style: style_Adm_Kec_Karangawen_1,
                interactive: true,
                title: '<img src="styles/legend/Adm_Kec_Karangawen_1.png" /> Adm_Kec_Karangawen'
            });
var format_Clipped_2 = new ol.format.GeoJSON();
var features_Clipped_2 = format_Clipped_2.readFeatures(json_Clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_2.addFeatures(features_Clipped_2);
var lyr_Clipped_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clipped_2, 
                style: style_Clipped_2,
                interactive: true,
                title: '<img src="styles/legend/Clipped_2.png" /> Clipped'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Adm_Kec_Karangawen_1.setVisible(true);lyr_Clipped_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Adm_Kec_Karangawen_1,lyr_Clipped_2];
lyr_Adm_Kec_Karangawen_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_mfd_20': 'FID_mfd_20', 'FID_ADMI_1': 'FID_ADMI_1', 'WADMPR': 'WADMPR', 'KODE_KAB': 'KODE_KAB', 'KABUPATEN': 'KABUPATEN', 'DESA': 'DESA', 'KODE_KEC': 'KODE_KEC', 'KECAMATAN': 'KECAMATAN', 'ID_2018': 'ID_2018', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Clipped_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'office': 'office', 'admin_level': 'admin_level', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'name': 'name', 'evacuation_center': 'evacuation_center', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'layer': 'layer', 'religion': 'religion', 'amenity': 'amenity', });
lyr_Adm_Kec_Karangawen_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_mfd_20': 'TextEdit', 'FID_ADMI_1': 'TextEdit', 'WADMPR': 'TextEdit', 'KODE_KAB': 'TextEdit', 'KABUPATEN': 'TextEdit', 'DESA': 'TextEdit', 'KODE_KEC': 'TextEdit', 'KECAMATAN': 'TextEdit', 'ID_2018': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Clipped_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'office': '', 'admin_level': '', 'school:type_idn': '', 'operator:type': '', 'name': '', 'evacuation_center': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'layer': '', 'religion': '', 'amenity': '', });
lyr_Adm_Kec_Karangawen_1.set('fieldLabels', {'OBJECTID': 'no label', 'FID_mfd_20': 'no label', 'FID_ADMI_1': 'no label', 'WADMPR': 'no label', 'KODE_KAB': 'no label', 'KABUPATEN': 'no label', 'DESA': 'no label', 'KODE_KEC': 'no label', 'KECAMATAN': 'no label', 'ID_2018': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Clipped_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'office': 'no label', 'admin_level': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'name': 'no label', 'evacuation_center': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'layer': 'no label', 'religion': 'no label', 'amenity': 'no label', });
lyr_Clipped_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
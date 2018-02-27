var wms_layers = [];
var format_17FreeRedAllSchools_buffer_0 = new ol.format.GeoJSON();
var features_17FreeRedAllSchools_buffer_0 = format_17FreeRedAllSchools_buffer_0.readFeatures(json_17FreeRedAllSchools_buffer_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17FreeRedAllSchools_buffer_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_17FreeRedAllSchools_buffer_0.addFeatures(features_17FreeRedAllSchools_buffer_0);var lyr_17FreeRedAllSchools_buffer_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_17FreeRedAllSchools_buffer_0, 
                style: style_17FreeRedAllSchools_buffer_0,
                title: '<img src="styles/legend/17FreeRedAllSchools_buffer_0.png" /> 17FreeRedAllSchools_buffer'
            });var format_Promise_zones_GA_1 = new ol.format.GeoJSON();
var features_Promise_zones_GA_1 = format_Promise_zones_GA_1.readFeatures(json_Promise_zones_GA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Promise_zones_GA_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Promise_zones_GA_1.addFeatures(features_Promise_zones_GA_1);var lyr_Promise_zones_GA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Promise_zones_GA_1, 
                style: style_Promise_zones_GA_1,
                title: '<img src="styles/legend/Promise_zones_GA_1.png" /> Promise_zones_GA'
            });var format_StrikeForce_GA_2 = new ol.format.GeoJSON();
var features_StrikeForce_GA_2 = format_StrikeForce_GA_2.readFeatures(json_StrikeForce_GA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrikeForce_GA_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_StrikeForce_GA_2.addFeatures(features_StrikeForce_GA_2);var lyr_StrikeForce_GA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StrikeForce_GA_2, 
                style: style_StrikeForce_GA_2,
                title: '<img src="styles/legend/StrikeForce_GA_2.png" /> StrikeForce_GA'
            });var format_Tract_poverty_above50_3 = new ol.format.GeoJSON();
var features_Tract_poverty_above50_3 = format_Tract_poverty_above50_3.readFeatures(json_Tract_poverty_above50_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tract_poverty_above50_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tract_poverty_above50_3.addFeatures(features_Tract_poverty_above50_3);var lyr_Tract_poverty_above50_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tract_poverty_above50_3, 
                style: style_Tract_poverty_above50_3,
                title: '<img src="styles/legend/Tract_poverty_above50_3.png" /> Tract_poverty_above50'
            });var format_CongressionalDistrictGA_4 = new ol.format.GeoJSON();
var features_CongressionalDistrictGA_4 = format_CongressionalDistrictGA_4.readFeatures(json_CongressionalDistrictGA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongressionalDistrictGA_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CongressionalDistrictGA_4.addFeatures(features_CongressionalDistrictGA_4);var lyr_CongressionalDistrictGA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongressionalDistrictGA_4, 
                style: style_CongressionalDistrictGA_4,
                title: '<img src="styles/legend/CongressionalDistrictGA_4.png" /> CongressionalDistrictGA'
            });

lyr_17FreeRedAllSchools_buffer_0.setVisible(true);lyr_Promise_zones_GA_1.setVisible(true);lyr_StrikeForce_GA_2.setVisible(true);lyr_Tract_poverty_above50_3.setVisible(true);lyr_CongressionalDistrictGA_4.setVisible(true);
var layersList = [lyr_17FreeRedAllSchools_buffer_0,lyr_Promise_zones_GA_1,lyr_StrikeForce_GA_2,lyr_Tract_poverty_above50_3,lyr_CongressionalDistrictGA_4];
lyr_17FreeRedAllSchools_buffer_0.set('fieldAliases', {'FY': 'FY', 'School_Dis': 'School_Dis', 'County': 'County', 'School_Nam': 'School_Nam', 'Total_Enro': 'Total_Enro', 'Total_Free': 'Total_Free', 'Total_Redu': 'Total_Redu', 'Total_Fr_1': 'Total_Fr_1', 'Percentage': 'Percentage', 'FullAdd': 'FullAdd', 'lon': 'lon', 'lat': 'lat', 'address': 'address', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'FRLS': 'FRLS', });
lyr_Promise_zones_GA_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'POP': 'POP', 'PV_RATE': 'PV_RATE', 'UE_RATE': 'UE_RATE', 'PROJECTID': 'PROJECTID', 'LEADORG': 'LEADORG', 'COMMUNITY': 'COMMUNITY', 'YEAR': 'YEAR', 'PromZones': 'PromZones', });
lyr_StrikeForce_GA_2.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'StrikeForc': 'StrikeForc', });
lyr_Tract_poverty_above50_3.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GISJN': 'GISJN', 'GISJOIN': 'GISJOIN', 'ADNEM006': 'ADNEM006', 'pct_185': 'pct_185', 'PovertyPct': 'PovertyPct', 'PovAbo50': 'PovAbo50', });
lyr_CongressionalDistrictGA_4.set('fieldAliases', {'STATEFP': 'STATEFP', 'CD114FP': 'CD114FP', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'LSAD': 'LSAD', 'CDSESSN': 'CDSESSN', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_17FreeRedAllSchools_buffer_0.set('fieldImages', {'FY': 'TextEdit', 'School_Dis': 'TextEdit', 'County': 'TextEdit', 'School_Nam': 'TextEdit', 'Total_Enro': 'TextEdit', 'Total_Free': 'TextEdit', 'Total_Redu': 'TextEdit', 'Total_Fr_1': 'TextEdit', 'Percentage': 'TextEdit', 'FullAdd': 'TextEdit', 'lon': 'TextEdit', 'lat': 'TextEdit', 'address': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'FRLS': 'TextEdit', });
lyr_Promise_zones_GA_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'POP': 'TextEdit', 'PV_RATE': 'TextEdit', 'UE_RATE': 'TextEdit', 'PROJECTID': 'TextEdit', 'LEADORG': 'TextEdit', 'COMMUNITY': 'TextEdit', 'YEAR': 'TextEdit', 'PromZones': 'TextEdit', });
lyr_StrikeForce_GA_2.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'StrikeForc': 'TextEdit', });
lyr_Tract_poverty_above50_3.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'GISJN': 'TextEdit', 'GISJOIN': 'TextEdit', 'ADNEM006': 'TextEdit', 'pct_185': 'TextEdit', 'PovertyPct': 'TextEdit', 'PovAbo50': 'TextEdit', });
lyr_CongressionalDistrictGA_4.set('fieldImages', {'STATEFP': 'TextEdit', 'CD114FP': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'LSAD': 'TextEdit', 'CDSESSN': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_17FreeRedAllSchools_buffer_0.set('fieldLabels', {'FY': 'no label', 'School_Dis': 'no label', 'County': 'no label', 'School_Nam': 'no label', 'Total_Enro': 'no label', 'Total_Free': 'no label', 'Total_Redu': 'no label', 'Total_Fr_1': 'no label', 'Percentage': 'no label', 'FullAdd': 'no label', 'lon': 'no label', 'lat': 'no label', 'address': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'FRLS': 'no label', });
lyr_Promise_zones_GA_1.set('fieldLabels', {'OBJECTID': 'no label', 'POP': 'no label', 'PV_RATE': 'no label', 'UE_RATE': 'no label', 'PROJECTID': 'no label', 'LEADORG': 'no label', 'COMMUNITY': 'no label', 'YEAR': 'no label', 'PromZones': 'no label', });
lyr_StrikeForce_GA_2.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'StrikeForc': 'no label', });
lyr_Tract_poverty_above50_3.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'GISJN': 'no label', 'GISJOIN': 'no label', 'ADNEM006': 'no label', 'pct_185': 'no label', 'PovertyPct': 'no label', 'PovAbo50': 'no label', });
lyr_CongressionalDistrictGA_4.set('fieldLabels', {'STATEFP': 'no label', 'CD114FP': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'LSAD': 'no label', 'CDSESSN': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_CongressionalDistrictGA_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
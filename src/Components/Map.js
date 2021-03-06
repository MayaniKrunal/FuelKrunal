import React from "react";
import { StyleSheet, View, Image, } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Circle, Marker } from 'react-native-maps';
import { Images, } from "../utils";

export default Mapcom = ({ onPress }) => {
    const markerImage = [
        { id: 0, imageurl: Images.shiclair, latitude: 22.755921, longitude: 78.576519 },
        { id: 1, imageurl: Images.shell, latitude: 22.753521, longitude: 78.574219 },
        { id: 2, imageurl: Images.chevron, latitude: 22.75391, longitude: 78.572219 },
        { id: 3, imageurl: Images.repsol, latitude: 22.752551, longitude: 78.575519 },
        { id: 4, imageurl: Images.gas76, latitude: 22.757521, longitude: 78.573219 },
    ];
    const circledata = [
        { id: 0, radius: 250, strokeColor: "rgba(181,205,160,1.0)", fillColor: "rgba(181,205,160,0.3)" },
        { id: 1, radius: 100, strokeColor: "rgba(150,185,145,1.0)", fillColor: "rgba(150,185,145,0.3)" },
        { id: 2, radius: 400, strokeColor: "rgba(211, 230,193,1.0)", fillColor: "rgba(211, 230,193,0.3)" },
    ];

    return (
        <View style={{ flex: 1 }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapview}
                initialRegion={{
                    latitude: 22.755921,
                    longitude: 78.574219,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                region={{
                    latitude: 22.755921,
                    longitude: 78.574219,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                {circledata.map((coord, index) =>
                    <Circle
                        center={{
                            latitude: 22.755921,
                            longitude: 78.574219,
                        }}
                        radius={coord.radius}
                        strokeColor={coord.strokeColor}
                        fillColor={coord.fillColor}
                        key={index}
                    />
                )}
                {markerImage.map((loc, index) =>
                    <MapView.Marker
                        coordinate={{
                            latitude: loc.latitude,
                            longitude: loc.longitude
                        }}
                        onPress={onPress}
                        key={index}
                    >
                        <Image
                            source={loc.imageurl}
                            style={{ height: 50, width: 50, resizeMode: 'contain', borderRadius: 50 }}
                        />
                    </MapView.Marker>
                )}
            </MapView>
        </View>
    );
}
const styles = StyleSheet.create({
    mapview: {
        height: '100%',
    },
})
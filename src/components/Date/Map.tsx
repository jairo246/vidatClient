import React, {useState, useEffect, useContext} from "react";
import {View, Text, TextInput} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import { MsgContext } from "../../context/Msg.context";

import { RequestLocationData } from "../../requests/GoogleMaps.request";
import DateStyle from "../../styles/Date.style";

interface ServiceData{
    title: string;
    description: string;
    currency: string;
    unitCost: string;
    providerId: number;
    properties: any;
}

const Map = () => {

    const serviceDataInitial: ServiceData = {
        title: "",
        description: "",
        currency: "",
        unitCost: "0",
        providerId: 1,
        properties: {}
    }
    const [serviceData, setServiceData] = useState<ServiceData>(serviceDataInitial);

    const { showMsg } = useContext(MsgContext);
    const [latitude, setLatitude] = useState(-33.039406235879866);
    const [longitude, setLongitude] = useState(-71.59107349774563);
    const [markerLatitude, setMarkerLatitude] = useState(-33.039406235879866);
    const [markerLongitude, setMarkerLongitude] = useState(-71.59107349774563);

    useEffect(() => {
        (async () => {
            if(serviceData.properties.location){
                setLatitude(serviceData.properties.location.latitude);
                setLongitude(serviceData.properties.location.longitude);
            }
            else {
                await Location.requestForegroundPermissionsAsync()
                    .then(() =>{
                        Location.getCurrentPositionAsync({})
                            .then(location=>{
                                    setLatitude(location.coords.latitude);
                                    setLongitude(location.coords.longitude);
                                }
                            )
                            .catch(e=>{
                                showMsg('Permiso a ubicación denegado');
                            });
                    })
                    .catch(e=>{
                        showMsg('Permiso a ubicación denegado');
                    });
            }
        })();
    }, []);

    const title = "Seleccionar ubicación";
    const addressPlaceholder = "Dirección";

    return (
        <View style={DateStyle.textInputContainer}>
            <Text style={DateStyle.title}> {title} </Text>

            <MapView style={DateStyle.map}
                     region={{
                         latitude: latitude,
                         longitude: longitude,
                         latitudeDelta: 0.01,
                         longitudeDelta: 0.01,
                     }}
                     onRegionChangeComplete={(region) => {
                         setMarkerLatitude(region.latitude);
                         setMarkerLongitude(region.longitude);
                         let properties = serviceData.properties;
                         let coordinates = {
                             latitude: region.latitude,
                             longitude: region.longitude
                         };
                         properties["location"] = coordinates;
                         RequestLocationData(coordinates)
                             .then(res => {
                                 properties["address"] = res.formatted_address;
                                 console.log(res)
                                 setServiceData({...serviceData, properties: properties});
                             });
                     }}
            >
                <Marker
                    coordinate={{ latitude : markerLatitude , longitude : markerLongitude }}
                    title={serviceData.title}
                    description={serviceData.description}
                />
            </MapView>
            <TextInput style={DateStyle.addressTextBox}
                       placeholder={addressPlaceholder}
                       defaultValue={serviceData.properties.address}
                       onChangeText={(event) => {
                           let properties = serviceData.properties;
                           properties["address"] = event.toString();
                           setServiceData({...serviceData, properties: properties});
                       }}
                       editable={false}
            />
        </View>
    );
};
export default Map;
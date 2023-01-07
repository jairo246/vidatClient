import * as Speech from 'expo-speech';
import * as Location from 'expo-location';
import { useContext } from "react";
import { Text, Pressable } from 'react-native';

import { AuthContext } from "../context/Auth.context";
import { MsgContext } from "../context/Msg.context";
import { ServiceContext } from "../context/Service.context";
import { SearchContext } from '../context/Search.context';

import { urlFilter } from "../interfaces/queries/FilterQuery.interface";
import { ItemSpecialtyType } from '../interfaces/queries/FilterQuery.interface';

import { RequestFilter } from '../requests/Services.requuest';
import { RequestLocationData } from "../requests/GoogleMaps.request";
import SpecialtySearchStyle from '../styles/SpecialtySearch.style';

const ItemSpecialty = ({name, color, onResultServicePress}:ItemSpecialtyType) => {

    const { jwt } = useContext(AuthContext);
    const { showMsg, errorCatch } = useContext(MsgContext);
    const { result } = useContext(ServiceContext);
    const { search, setLocation } = useContext(SearchContext)

    const speakName = () => Speech.speak(name);
    const speakLocation = () => Speech.speak('Active la ubicación para poder procedir');

    const getLocation = async () => {
      if(search.location == ""){
          await Location.requestForegroundPermissionsAsync()
              .then(() =>{
                  Location.getCurrentPositionAsync({})
                      .then(location=>{
                        const latitude_ = location.coords.latitude;
                        const longitude_ = location.coords.longitude;
  
                        RequestLocationData({latitude: latitude_,longitude: longitude_})
                          .then(res => { 
                            if(res == undefined) setLocation("Viña del Mar")
                            else setLocation(res.address_components[3].long_name)
                          });
                          }
                      )
                      .catch(e=>{
                          showMsg('Permiso a ubicación denegado');
                      });
              })
              .catch(e=>{
                  errorCatch();
              });
      }
    }

    const Filter = (specialty_:string) => {
    
        fetch(urlFilter,RequestFilter(specialty_,search.location, jwt))
        .then(res => res.json())
        .then(data => {
            result(data.data.filterServices)
            onResultServicePress()
        })
        .catch(error => errorCatch())
  }

  const Button = () => {
    /*
    if(search.location == ""){
        speakLocation()
        getLocation()
    }
    else{
      Filter(name)
    }
    */
    Filter(name)
  }

    
  return (
    <Pressable       
            onPress={Button}
            onLongPress={speakName}
            style={[SpecialtySearchStyle.SpecialtyItemTouchSearch,{backgroundColor: color}]}
       >
      <Text style={SpecialtySearchStyle.SpecialtyItemTextSearch}>{name}</Text>
 
    </Pressable>
  );
}

export default ItemSpecialty
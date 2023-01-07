import { useContext, useEffect } from 'react';
import { Avatar } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';

import * as Speech from 'expo-speech';
import * as Location from 'expo-location';

import { SearchContext } from '../../context/Search.context';
import { MsgContext } from '../../context/Msg.context';
import { RequestLocationData } from "../../requests/GoogleMaps.request";
import CategorySearchStyle from '../../styles/CategorySearch.style';

const AudioSpecialty = ( ) => {

  const { search, setLocation } = useContext(SearchContext)
  const { showMsg, errorCath } = useContext(MsgContext)
  const speakSpecialty = () => Speech.speak('Elija una Especialidad para poder buscar');
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
                  errorCath();
            });
    }
  }

  const getAudio = () => {
    if(search.location == ""){
        speakLocation()
        getLocation()
    }
    else{
      speakSpecialty()
    }
  }

  useEffect(() => {
    getLocation()
}, []);

    return (
        <View style={CategorySearchStyle.CategorySearchAudio} > 
            <TouchableOpacity onPress={getAudio}
            >
            <Avatar.Image  size={230} source={require('../../../assets/audio.png')} />

            </TouchableOpacity>

        </View>
    );
  }
  export default AudioSpecialty;
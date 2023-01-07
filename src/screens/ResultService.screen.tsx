import { useContext, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';

import { ServiceContext } from '../context/Service.context';
import { SearchContext } from "../context/Search.context";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { SearchStackParamList } from '../interfaces/navigators/paramList.interface';
import ServiceItem from '../components/ResultService/ServiceItem';
import ResultServiceStyle from '../styles/ResultService.style';


const ResultServiceScreen = ({ route, navigation }:NativeStackScreenProps<SearchStackParamList,"ResultServiceScreen">) => {

  const backButtonText = "Regresar";
  const { services} = useContext(ServiceContext);
  const {setCurrentPosition} = useContext(SearchContext)

  if(services.length != 0 ){

    return (
      <View style={ResultServiceStyle.ResultScreen}>
          <View style={ResultServiceStyle.ResultList}>
              <ScrollView>

                { services.map((service) => {
                  return(
                    <ServiceItem
                      key={service.id}
                      serviceId={service.id}
                      title={service.title}
                      images={service.properties.photos}
                      secondaryText={service.description}
                      onInfoServicePress={ () => navigation.navigate('InfoServiceScreen')}
                    />
                  );
                })}
              </ScrollView>
          </View>
          <View style={ResultServiceStyle.buttonStyleContainer}>
              <TouchableOpacity
                      style={ResultServiceStyle.processButtonTouch}
                  onPress={() => {
                        navigation.navigate('SpecialtySearchScreen')
                        setCurrentPosition(1)
                      }}
              >
                  <Text style={ResultServiceStyle.processButtonText}>
                  {backButtonText}
                  </Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
  else{
    return(
      <View style={ResultServiceStyle.Empty}>
          <TouchableOpacity 
              style={ResultServiceStyle.TouchEmpty}
              onPress={() => {
                // @ts-ignore
                    navigation.navigate('SpecialtySearchScreen')
                    setCurrentPosition(1)
              }}>
              <Text style={ResultServiceStyle.TextEmpty}>
                  {backButtonText}
              </Text>
          </TouchableOpacity>
      </View>
    );
  }
}
export default ResultServiceScreen;
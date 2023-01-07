import { View, TouchableOpacity, Text } from 'react-native';
import { useContext } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { SearchContext } from "../context/Search.context";
import type { SearchStackParamList } from '../interfaces/navigators/paramList.interface';
import InfoServiceTab from '../navigators/tab/InfoServiceTab';
import ButtonScheduleId from '../queries/ScheduleId.query';

import InfoServiceGeneral from '../components/InfoService/InfoServiceGeneral';
import InfoServiceStyle from '../styles/InfoService.style';

const InfoServiceScreen = ({ route, navigation }:NativeStackScreenProps<SearchStackParamList,"InfoServiceScreen">) => {

  const backButtonText = "Regresar";
  
  const { setCurrentPosition } = useContext(SearchContext)

  return (
    <View style={InfoServiceStyle.InfoScree}>
      <View style={InfoServiceStyle.InfoServiceGeneral}>
        <InfoServiceGeneral />
      </View>
      <View style={InfoServiceStyle.InfoTab}>
        <InfoServiceTab />
      </View>
      <View style={InfoServiceStyle.buttonStyleContainer}>
            <TouchableOpacity
                    style={InfoServiceStyle.processButtonTouch}
                onPress={() => {
                      navigation.navigate('ResultServiceScreen')
                      setCurrentPosition(2)
                    }}
            >
                <Text style={InfoServiceStyle.processButtonText}>
                {backButtonText}
                </Text>
            </TouchableOpacity>
            <ButtonScheduleId onCalenderSearchPress={() => navigation.navigate("CalenderSearchScreen")}/>
      </View>
    </View>
  );
}
export default InfoServiceScreen;
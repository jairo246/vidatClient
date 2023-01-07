import { useContext } from "react";
import { View, TouchableOpacity,Text} from "react-native";
import { SearchContext } from "../context/Search.context";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { SearchStackParamList } from '../interfaces/navigators/paramList.interface';

import ChooseSpecialty from '../components/SpecialtySearch/ChooseSpecialty';
import AudioSpecialty from '../components/SpecialtySearch/AudioSpecialty';
import SpecialtySearchStyle from "../styles/SpecialtySearch.style";

const SpecialtySearchScreen = ({ route, navigation }:NativeStackScreenProps<SearchStackParamList,"SpecialtySearchScreen">) => {

  const { setCurrentPosition } = useContext(SearchContext)
  const backButtonText = "Regresar";

      return (
        <View style={SpecialtySearchStyle.SpecialtySearchScreen}>
            <AudioSpecialty/>
            <ChooseSpecialty onResultServicePress={() => {navigation.navigate("ResultServiceScreen")
                                                          setCurrentPosition(2) }}/>
            <View style={SpecialtySearchStyle.buttonStyleContainer}>
          <TouchableOpacity
                  style={SpecialtySearchStyle.processButtonTouch}
              onPress={() => {
                    navigation.navigate('CategorySearchScreen')
                    setCurrentPosition(0)
                  }}
          >
              <Text style={SpecialtySearchStyle.processButtonText}>
              {backButtonText}
              </Text>
          </TouchableOpacity>
      </View>
        </View>
      );
}

export default SpecialtySearchScreen;